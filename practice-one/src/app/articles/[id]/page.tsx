// componens
import Image from "next/image";
import { RightSidebar } from "@/ui/features";
import { CardPost, TitleSection, Typography } from "@/ui/components";

export default function DetailPage() {
  return (
    <main className="container mx-auto">
      <p className="text-p font-normal my-11">Home</p>
      <section className="flex flex-col lg:flex-row mb-12">
        {/* article */}
        <article className="flex-1 mb-17.5">
          <div className="mb-7.5 lg:bg-white-90 lg:p-7 xl:mb-[130px] xl:h-[604px] rounded-xl">
            <Typography tag="h1" additionalClasses="text-md font-medium sm:text-xxl sm:font-normal mb-7">
              How to Spend the Perfect Day on Croatia’s Most Magical Island
            </Typography>
          <Image
            className="mx-auto rounded-xl w-[358px] h-[198px] sm:w-full sm:h-[336px] lg:h-[460px] xl:w-full xl:h-[538px] 2xl:h-[598px] 2xl:w-[1072px]"
            src="https://images.unsplash.com/photo-1513306239747-bca82d7485f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="fishing"
            width={1072}
            height={598}
          />
          </div>
          <div className="w-[291px] sm:w-[516px] h-5 bg-slate-600 mx-auto mb-12">
            <p>Tag</p>
          </div>
          <section>
            <h2 className="text-md">
              Don’t wait. The purpose of our lives is to be happy!
            </h2>
            <p>
              Upon arrival, your senses will be rewarded with the pleasant scent
              of lemongrass oil used to clean the natural wood found throughout
              the room, creating a relaxing atmosphere within the space. A
              wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite.
            </p>
            <h2 className="text-md">
              Not how long, but how well you have lived is the main thing.
            </h2>
            <p>
              When you are ready to indulge your sense of excitement, check out
              the range of water- sports opportunities at the resort’s on-site
              water-sports center. Want to leave your stress on the water? The
              resort has kayaks, paddleboards, or the low-key pedal boats.
              Snorkeling equipment is available as well, so you can experience
              the ever-changing undersea environment. Not only do visitors to a
              bed and breakfast get a unique perspective on the place they are
              visiting, they have options for special packages not available in
              other hotel settings. Bed and breakfasts can partner easily with
              local businesses for a smoothly organized and highly personalized
              vacation experience. The Fife and Drum Inn offers options such as
              the Historic Triangle Package that includes three nights at the
              Inn, breakfasts, and admissions to historic Williamsburg,
              Jamestown, and Yorktown. Bed and breakfasts also lend themselves
              to romance. Part of the charm of a bed and breakfast is the
              uniqueness; art, décor, and food are integrated to create a
              complete experience. For example, the Fife and Drum retains the
              colonial feel of the area in all its guest rooms. Special features
              include antique furnishings, elegant four poster beds in some
              guest rooms, as well folk art and artifacts from the restoration
              period of the historic area available for guests to enjoy.
            </p>
          </section>
        </article>
        {/* sidebar */}
        <RightSidebar />
      </section>

       {/* top posts */}
       <section className="top-posts container flex flex-col justify-between bg-white-100 h-459 mb-30 sm:mb-7.5 lg:mb-25">
        <TitleSection title="Popular Posts" />
        <div className="card-group flex gap-6 overflow-scroll">
          <CardPost isVerticle />
          <CardPost isVerticle />
          <CardPost isVerticle />
          <CardPost isVerticle />
        </div>
      </section>
    </main>
  );
}
