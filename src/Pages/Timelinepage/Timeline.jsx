import { useContext, useState } from "react";
import { FriendContext } from "../../Context/friendContext";
import Call from "../../assets/call.png"
import Text from "../../assets/text.png"
import Video from "../../assets/video.png"


const Timeline = () => {
    const { storeInterections } = useContext(FriendContext);
    const [selectedFilter, setSelectedFilter] = useState("all");

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    
    const filteredInteractions = selectedFilter === "all" 
        ? storeInterections 
        : storeInterections.filter(interaction => {
            const interactionType = interaction.type.toLowerCase();
            const filterType = selectedFilter.toLowerCase();
            if (filterType === "video") {
                return interactionType === "video-call";
            }
            return interactionType === filterType;
          });

    return (
        <div className="w-[95%] md:max-w-6xl mx-auto my-15">
            <div className="space-y-4">
                <p className="text-center md:text-left text-3xl font-bold">Timeline</p>
                <div className="text-center md:text-left">
                    <select 
                        value={selectedFilter} 
                        onChange={handleFilterChange} 
                        className="select"
                    >
                        <option value="all">Filter timeline</option>
                        <option value="call">Call</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                    </select>
                </div>
                {
                    filteredInteractions.map((friend, id) =>
                        <div key={id} className="flex gap-6 border border-gray-300 px-4 py-5 rounded-md items-center">
                            <div className="flex items-center">
                                {
                                    <img src={(friend.type.toLowerCase() === "call" ? Call : (friend.type.toLowerCase() === "text" ? Text : Video))} alt={friend.type} />
                                }
                            </div>
                            <div>
                                <p className="text-[18px] font-light"><span className="text-xl font-medium">{friend.type}</span> with {friend.name}</p>
                                <p className="text-sm text-gray-500 font-light">
                                    {new Date(friend.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Timeline;