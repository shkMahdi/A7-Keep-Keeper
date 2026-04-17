
const FriendCard = ({ friend }) => {
    // console.log(friend)
    return (
        <div className="text-center space-y-4 rounded-2xl shadow-xl py-4 px-1 border border-gray-200 ">
            <img className='h-20 w-20 rounded-full mx-auto' src={friend.picture} alt={friend.name} />
            <p className="font-semibold">{friend.name}</p>
            <p className="font-light text-sm text-gray-400">{friend.days_since_contact}d ago</p>
            <div className="space-y-2">
                <div>
                    {
                        friend.tags.map((tag, id) =>
                            <p key={id} className="badge p-2 bg-[#CBFADB] rounded-xl font-medium text-[#244D3F] text-[12px]">{tag}</p>
                        )
                    }
                </div>
                <div><p className="badge p-2 bg-[#EF4444] rounded-xl font-medium text-white text-[12px]"> {friend.status}</p></div>
            </div>
        </div>
    );
};

export default FriendCard;