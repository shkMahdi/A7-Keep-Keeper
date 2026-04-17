import { useContext } from "react";
import { FriendContext } from "../../Context/friendContext";
import Call from "../../assets/call.png"
import Text from "../../assets/text.png"
import Video from "../../assets/video.png"


const Timeline = () => {
    const { storeInterections } = useContext(FriendContext);

    return (
        <div className="w-[95%] md:max-w-6xl mx-auto my-15">
            <div className="space-y-4">
                <p className="text-center md:text-left text-3xl font-bold">Timeline</p>
                <div className="text-center md:text-left">
                    <select defaultValue="Pick an option" className="select">
                        <option disabled={true}>Filter timeline</option>
                        <option>Call</option>
                        <option>Text</option>
                        <option>Video</option>
                    </select>
                </div>
                {
                    storeInterections.map((friend, id) =>
                        <div key={id} className="flex gap-6 border border-gray-300 px-4 py-5 rounded-md items-center">
                            <div className="flex items-center">
                                {
                                    <img src={(friend.type == "Call" ? Call : (friend.type == "Text" ? Text : Video))} alt="" />
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