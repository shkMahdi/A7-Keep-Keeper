import { useContext } from "react";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";
import { FriendContext } from "../../Context/friendContext";

const Stats = () => {
    const { storeInterections } = useContext(FriendContext);

    const textCount = storeInterections.filter(item => item.type.toLowerCase() === 'text').length;
    const callCount = storeInterections.filter(item => item.type.toLowerCase() === 'call').length;
    const videoCount = storeInterections.filter(item => item.type.toLowerCase() === 'video-call').length;

    const data = [
        { name: "text", value: textCount || 0, fill: "#7E35E1" },
        { name: "call", value: callCount || 0, fill: "#244D3F" },
        { name: "video", value: videoCount || 0, fill: "#37A163" }
    ].filter(item => item.value > 0);

    const totalInteractions = storeInterections.length;
    return (
        <div className='w-[95%] md:max-w-227.5 mx-auto space-y-8 my-8'>
            <p className="text-center md:text-left text-3xl font-bold">Friendship Analytics</p>
            <div className="shadow-xl p-10 rounded-2xl">
                {totalInteractions === 0 ? (
                    <div className="flex justify-center items-center py-20 text-gray-500">
                        <p>No interactions yet. Start adding interactions to see the analytics!</p>
                    </div>
                ) : (
                    <>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    // Corner radius is the rounded edge of each pie slice
                                    cornerRadius="50%"
                                    fill="#8884d8"
                                    // padding angle is the gap between each pie slice
                                    paddingAngle={5}
                                    dataKey="value"
                                    isAnimationActive={true}
                                />
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="flex justify-center items-center gap-6 mt-4 text-sm">

                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#7E35E1]"></span>
                                <p className="text-gray-600">Text ({textCount})</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#244D3F]"></span>
                                <p className="text-gray-600">Call ({callCount})</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#37A163]"></span>
                                <p className="text-gray-600">Video ({videoCount})</p>
                            </div>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Stats;