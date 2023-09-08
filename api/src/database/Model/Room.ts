import mongoose from 'mongoose';
import { IRoom, RoomModel, IRoomMethods } from '../../Types/Room';
const roomSchema = new mongoose.Schema<IRoom, RoomModel, IRoomMethods>({
    roomName: String,
    isGroupChat: Boolean,

    users: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    ],
    roomImage: {
        type: String,
    },
    roomAdmin: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },

    blockedUsers: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    ],
});

export default mongoose.model('Room', roomSchema);
