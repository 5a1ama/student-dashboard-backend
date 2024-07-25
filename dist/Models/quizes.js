"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const quizesSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    course: {
        type: String
    },
    topic: {
        type: String
    },
    dueTo: {
        type: Date
    }
});
exports.default = mongoose_1.default.model('quizes', quizesSchema);
