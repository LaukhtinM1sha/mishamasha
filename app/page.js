import Main from "@/components/Main";
import { PrismaClient } from "@prisma/client";

export default async function page() {


  const prisma = new PrismaClient()

  const response = await prisma.services.findMany()

  console.log(response);
  return (
    <div className="">

      <div className="relative min-h-[800px]">
        <video className="h-full w-full absolute top-0 left-0 right-0 -z-10" autoPlay muted loop>
          <source src="/img/bgvideo.mp4" type="video/mp4" />
        </video>


        <div className="pt-[200px] container text-white mx-auto">
          <h1 className="text-4xl mb-5">Наши услуги</h1>



          <ul className="">
            {
              response.map((resp) => (
                <div className="flex justify-between ">
                  <span>{resp.name}</span>
                  <span>{resp.price}</span>
                </div>
              )

              )
            }
          </ul>
        </div>


      </div>
    </div>
  )
}
