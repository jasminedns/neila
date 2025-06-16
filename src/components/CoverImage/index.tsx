import Image from "next/image"

const CoverImage = () => {
    return (
        <div className="hidden lg:block lg:absolute lg:max-w-[250px]" >
            <Image src="/images/Game_cover.png" alt="cover" width={300} height={400}/>
        </div>
    )
}

export default CoverImage