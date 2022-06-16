"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = __importDefault(require("./database/connect"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const mealsRoute_1 = __importDefault(require("./routes/mealsRoute"));
const morgan_1 = __importDefault(require("morgan"));
const notFound_1 = require("./middlewares/notFound");
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
// import {dirname} from "path"
// import {fileURLToPath} from "url"
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
if (process.env.NODE_ENV !== "production") {
    app.use((0, morgan_1.default)("dev"));
}
// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });
// const _dirname = dirname(fileURLToPath(import.meta.url))
app.use(express_1.default.static(path_1.default.join(__dirname, "./client/public")));
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, express_mongo_sanitize_1.default)());
app.use("/", userRoutes_1.default);
app.use("/", adminRoutes_1.default);
app.use("/", mealsRoute_1.default);
app.use(notFound_1.notFoundMiddleware);
const start = async () => {
    try {
        await (0, connect_1.default)(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`⚡️server running on port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
