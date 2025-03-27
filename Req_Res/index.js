let http=require("http")

let server = http.createServer((req, res) => {
    
 if (req.url == "/") {
        res.end("Hello World")
    }
    

    if (req.url == "/news") {
        res.end("News")
       }
    
    if (req.url == "/about") {
        let obj = {
            name: "John",
            data: [
                {
                    newsTitle: "News1",
                    newsContent: "Content1",
                    newsDate: "Date1",
                    newsAuthor: "Hello"
                },
                {
                    newsTitle: "News2",
                    newsContent: "Content2",
                    newsDate: "Date2",
                    newsAuthor: "Hello2"
                }
            ]
        };
        return res.end(JSON.stringify(obj));
       }
    
    

    
    if (req.url == "/contact") {
        res.end("Contact")
    }
    

    
       if (req.url == "/jungle") {
       }
    
    


    res.end("Hello World")
})



 
server.listen("8000") // http://localhost:8000