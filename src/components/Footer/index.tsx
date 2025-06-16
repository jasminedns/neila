import Out_Now_Div from "../Out_Now_Div";

const Footer: React.FC = () => {
    return (
      <footer className="bg-[linear-gradient(38deg,_rgba(8,8,8,1)_0%,_rgba(0,0,0,1)_51%,_rgba(87,83,66,1)_90%,_rgba(145,122,71,1)_97%)]">
        <Out_Now_Div />
        <div className="font-montserrat text-white text-[12px] md:text-[16px] lg:text-[18px] mt-0 pt-0  p-4 md:p-8 mx-1 md:mx-3 text-justify">
            <p className="text-center">&copy; 2025.CounterCurrentGames.</p>
              <p className="text-center">All rights to franchise belong to the original owner.Original Creator.
                  This Project was created as a part of our education at Futuregames and is not
                  intended for commercial use.We do not claim any ownership
                  of the original product. </p>
        </div>
      

    </footer>
    );
    }


export default Footer;