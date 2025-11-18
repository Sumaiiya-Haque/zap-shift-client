
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userName,review:testimonial,user_photoURL} = review
    return (

<div className=''>

    <article className="w-full max-w-3xl bg-pink-50 rounded-2xl shadow-lg p-8 md:p-12">
{/* quote mark */}
<div className="mb-6">



{/* quote icon */}
<div className="mb-6 text-primary">
<FaQuoteLeft size={32} />
</div>
</div>


{/* quote text */}
<p className=" text-lg md:text-xl  md:leading-loose font-sans max-w-2xl">
{testimonial}
</p>


{/* dotted divider */}
<div className="mt-8 mb-6">
<div className="w-full border-t-2 border-dotted border-teal-900/40" />
</div>


{/* author row */}
<div className="flex items-center gap-6">
<div className=" w-14 h-14 rounded-full ">
    <img src={user_photoURL} alt="" />
<div className="bg-teal-900" />

</div>


<div>
<h3 className="text-teal-900 text-xl md:text-2xl font-extrabold leading-tight">{userName}</h3>
<p className="text-gray-700 text-sm md:text-base mt-1">Senior Product Designer</p>
</div>
</div>
</article>
</div>
    );
};

export default ReviewCard;