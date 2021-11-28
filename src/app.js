import express from "express";

import indexRoutes from "./routes/index.routes";

import { exphbs } from "express-handlebars";

import path from "path";

const app = express();


app.set("views", path.join(__dirname, "views"));

app.engine(".hbs", exphbs({ 
    
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",


}));


//routes
app.use(indexRoutes);

export default app;