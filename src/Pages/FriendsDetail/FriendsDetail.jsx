import { useLoaderData, useParams } from "react-router";
import { FiClock, FiArchive, FiTrash2, FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { FriendContext } from "../../Context/friendContext";

const FriendsDetail = () => {
    const friends = useLoaderData();
    const { id } = useParams();

    const {handleInteractions} = useContext(FriendContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const friend = friends.find(f => f.id == id);

    const statusColor = {
        "overdue": "bg-red-500",
        "almost due": "bg-yellow-400",
        "on-track": "bg-green-500"
    };

    return (
        <div className="w-[95%] md:max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6 my-20">

            {/* left side */}
            <div className="space-y-4">


                <div className="bg-white p-6 rounded-xl shadow text-center space-y-3">
                    <img
                        src={friend.picture}
                        alt=""
                        className="w-20 h-20 rounded-full mx-auto"
                    />

                    <h2 className="text-xl font-bold">{friend.name}</h2>

                    <span className={`text-white text-xs px-3 py-1 rounded-full ${statusColor[friend.status]}`}>
                        {friend.status}
                    </span>

                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {
                            friend.tags.map((tag, id) => (
                                <span key={id} className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full">
                                    {tag}
                                </span>
                            ))
                        }
                    </div>

                    <p className="text-sm text-gray-500 italic">
                        "{friend.bio}"
                    </p>

                    <p className="text-sm text-gray-600">
                        {friend.email}
                    </p>
                </div>

                {/* actions btn */}
                <div className="space-y-2">
                    <button className="btn btn-outline w-full flex items-center gap-2 justify-center rounded-md hover:bg-gray-100">
                        <FiClock /> Snooze 2 Weeks
                    </button>
                    <button className="btn btn-outline w-full flex items-center gap-2 justify-center p-2 rounded-md hover:bg-gray-100">
                        <FiArchive /> Archive
                    </button>
                    <button className="btn btn-outline w-full flex items-center gap-2 justify-center p-2 rounded-md text-red-500 hover:bg-red-50">
                        <FiTrash2 /> Delete
                    </button>
                </div>

            </div>

            {/* right side */}
            <div className="md:col-span-2 space-y-6">

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white px-4 py-6 rounded-xl shadow text-center">
                        <h3 className="text-2xl font-bold text-[#244D3F]">{friend.days_since_contact}</h3>
                        <p className="text-sm text-gray-500">Days Since Contact</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow text-center">
                        <h3 className="text-2xl font-bold text-[#244D3F]">{friend.goal}</h3>
                        <p className="text-sm text-gray-500">Goal (Days)</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow text-center">
                        <h3 className="text-lg font-bold text-[#244D3F]">{friend.next_due_date}</h3>
                        <p className="text-sm text-gray-500">Next Due</p>
                    </div>
                </div>

                {/* Relationship Goal */}
                <div className="bg-white px-5 py-8 rounded-xl shadow flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-lg">Relationship Goal</h3>
                        <p className="text-gray-600">Connect every <span className="font-bold">{friend.goal} days</span></p>
                    </div>
                    <button className="border px-4 py-1 rounded-md hover:bg-gray-100">
                        Edit
                    </button>
                </div>

                {/* Quick Check-In */}
                <div className="bg-white px-5 py-8 rounded-xl shadow">
                    <h3 className="font-semibold text-lg mb-4">Quick Check-In</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button onClick={() => handleInteractions("Call", friend, new Date())} className="flex flex-col items-center justify-center border rounded-lg py-6 hover:bg-gray-100">
                            <FiPhone size={20} />
                            <span className="mt-2 text-sm">Call</span>
                        </button>

                        <button onClick={() => handleInteractions("Text", friend, new Date())} className="flex flex-col items-center justify-center border rounded-lg py-6 hover:bg-gray-100">
                            <FiMessageSquare size={20} />
                            <span className="mt-2 text-sm">Text</span>
                        </button>

                        <button onClick={() => handleInteractions("video-call", friend, new Date())} className="flex flex-col items-center justify-center border rounded-lg py-6 hover:bg-gray-100">
                            <FiVideo size={20} />
                            <span className="mt-2 text-sm">Video</span>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FriendsDetail;