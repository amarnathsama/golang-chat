package websocket

import (
	"encoding/json"
	"fmt"
	"log"
	"sync"

	"github.com/gorilla/websocket"
)

type Client struct {
	Conn *websocket.Conn
	Pool *Pool
	mu   sync.Mutex
}

type Message struct {
	Type   int    `json:"type"`
	Body   string `json:"body"`
	PoolID int    `json:"poolID"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()
	for {

		messageType, p, err := c.Conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		var data Message
		data.Type = messageType
		if err := json.Unmarshal([]byte(p), &data); err != nil {
			fmt.Println(err.Error())
		}
		c.Pool.Broadcast <- data
		fmt.Printf("Message Recieved:%+v\n", data)
	}
}
