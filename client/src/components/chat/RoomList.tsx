import React from 'react';
import Avatar from '../reusables/Avatar';
import Link from 'next/link';
import { useRoom } from '@/context/chat/RoomContextProvider';
import Loading from '../reusables/Loading';
import { BASE_PATH } from '@/config/keys';

function ChatList() {
    const { state } = useRoom();

    return (
        <div className="mt-8 w-full h-full overflow-y-scroll overflow-x-hidden">
            <div className="rooms max-h-full flex gap-2 flex-col w-full md:pb-0">
                {state.isRoomsLoading ? (
                    <Loading />
                ) : !state.rooms ? (
                    <h2>Rooms not available</h2>
                ) : (
                    state.rooms?.map((room, i) => (
                        <div className="w-full h-full" key={room._id}>
                            <Link href={`/chat/${room._id}`} className='w-full h-full block'>
                                <div className="cursor-pointer roomItem flex items-center justify-between flex-row p-2 m-2 bg-Gravel rounded-md">
                                    <div className="messageDetails flex flex-row gap-2 items-center">
                                        <Avatar
                                            source={
                                                room.isGroupChat
                                                    ? `${BASE_PATH}/images/groupImages/${room.roomImage}`
                                                    : `${BASE_PATH}/images/userImages/${room.roomImage}`
                                            }
                                            className="h-[60px] w-[60px] "
                                        />
                                        <div className={`messageContent ${true ? 'text-gray-400' : 'text-white'}`}>
                                            <h2 className="text-md font-medium">{room.roomName}</h2>
                                            {room.isGroupChat ? (
                                                <p>
                                                    {room.lastMessage &&
                                                        `${room.lastMessage?.sender?.name}:${room.lastMessage.textContent}`}
                                                </p>
                                            ) : (
                                                <p className="text-sm font-light">
                                                    {room.lastMessage ? room.lastMessage?.textContent : ''}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    {/* {room.sender.online ? (
                                    <div className="onlinestatus rounded-full w-2 h-2 bg-primary"></div>
                                ) : (
                                    ''
                                )} */}
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ChatList;
