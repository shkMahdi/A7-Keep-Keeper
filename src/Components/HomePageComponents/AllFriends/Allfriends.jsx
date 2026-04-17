import { use, Suspense } from "react";
import FriendCard from "../../UI/FriendCard";
import { PropagateLoader } from "react-spinners";

const friendsData = fetch("/public/Data/friendsData.json").then(res => res.json());

const FriendsContent = () => {
    const friends = use(friendsData);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-8'>
            {
                friends.map((friend) => 
                    <FriendCard key={friend.id} friend={friend}></FriendCard>
                )
            }
        </div>
    );
};

const Allfriends = () => {
    return (
        <div className='w-[95%] md:max-w-227.5 mx-auto'>
            <div className="py-8 border-t border-t-gray-300">
                <p className="text-center md:text-left text-2xl font-bold">Your Friends</p>
                <Suspense fallback={<div className="flex justify-center items-center py-20"><PropagateLoader color="#36d7b7" /></div>}>
                    <FriendsContent />
                </Suspense>
            </div>
        </div>
    );
};

export default Allfriends;