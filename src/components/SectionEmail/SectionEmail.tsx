import Heading from "components/Heading/Heading";
import Input from "shared/Input/Input";
import GuestsInput from "components/HeroSearchForm/GuestsInput";
import ButtonCircle from "shared/Button/ButtonCircle";

const SectionEmail = ({

}) => {
 
    return (
        
        <div className="nc-SectionGridFeatureProperty relative">
            <Heading isCenter desc="***">
                Contactanos
            </Heading>
         
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Nombres
                        </label>
                        <Input
                        required
                        aria-required
                        placeholder="Tingo Maria Expeditions"
                        type="text"
                        />
                        <br />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            E-mail
                        </label>
                        <Input
                            required
                            aria-required
                            placeholder="info@tingomariaexpeditions"
                            type="email"
                        />
                        <br />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Numero de Celular
                        </label>
                        <Input
                            required
                            aria-required
                            placeholder="99-9999999"
                            type="number"
                        />
                   
                    </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Mensaje
                    </label>
                    <Input
                    required
                    aria-required
                    placeholder="Escribe tu mensaje aqui..."
                    type="text"
                    />
                    </div>
                </div>
                
              
               
            </form>
                
        </div>
       
    )
}
export default SectionEmail;