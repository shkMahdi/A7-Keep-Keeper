import SummaryCard from "../../UI/SummaryCard";

const Banner = () => {
    return (
        <div className='w-[95%] md:max-w-227.5 mx-auto'>
            <div className='text-center space-y-3 my-8'>
                <p className='text-3xl md:text-5xl font-bold'>Friends to keep close in your life</p>
                <p className='text-[#64748B] text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className="mt-4 px-4 py-2 bg-[#244D3F] text-white rounded-md hover:bg-[#1b3a2f] transition">
                    + Go Back Home
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8'>
                <SummaryCard stat={"10"} title={"Totol Friends"}></SummaryCard>
                <SummaryCard stat={"10"} title={"On Track"}></SummaryCard>
                <SummaryCard stat={"10"} title={"Need Attention"}></SummaryCard>
                <SummaryCard stat={"10"} title={"Interactions This Month"}></SummaryCard>
                
            </div>
        </div>
    );
};

export default Banner;