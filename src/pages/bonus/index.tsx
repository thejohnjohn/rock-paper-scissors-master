import { Fragment } from "react";

import Score from "../../components/score";
import Hand from "../../components/hand";

import { BONUS_HANDTYPE } from "../../constants/constants";

function Bonus(){
    return (
        <Fragment>
            <Score />
            <div className="gameboard">
                {
                    BONUS_HANDTYPE.map((item: string, key: number) =>{
                        return(<Hand key={key} hand={item}/>)
                    })
                }              
            </div>
        </Fragment>
    );
}

export default Bonus;