import express from 'express';
import cors from 'cors';
import { PostController } from './posts.controller.js';
import { SubscriptionController } from "./sub.controller.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use(express.json({ limit: '20mb' }));

app.get('/', (request, response) => {
    response.send('HELLO FIW!');
});

// Endpunkte definieren
app.post("/posts", PostController.create); // C
app.get("/posts/title", PostController.readOneByTitle); // R (one)
app.get("/posts", PostController.readAll); // R (all)
app.get("/posts/:postId", PostController.readOne); // R (one)

app.put("/posts/:postId", PostController.update); // U
app.delete("/posts/:postId", PostController.delete); // D

app.post("/subscription", SubscriptionController.subscribe);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ...`);
    }
});
