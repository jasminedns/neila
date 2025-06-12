import Image from "next/image"

const CoverImage = () => {
    return (
        <div className="z-10">
        <Image src="/images/Game_cover.png" alt="cover" width={300} height={400}/>
        </div>
    )
}

export default CoverImage