"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HomeController = __importStar(require("./controllers/home"));
// export class Router {
exports.setupRoutes = function (app) {
    app.get('/', function (req, res) {
        //@ts-ignore
        return res.render('index', req.locals);
    });
    app.get('/index', HomeController.index);
    return app;
};
