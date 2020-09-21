import React , {Component} from 'react';

import Virtual_Storage from '../Services/IT_INFRUSTRUCTURE/Virtual_Storage';
import ProdFill from '../Services/IT_INFRUSTRUCTURE/Product_Fulfillment';
import HP_Storage from '../Services/IT_INFRUSTRUCTURE/HP_Storage_3Par';
import All_Flash_Array from '../Services/IT_INFRUSTRUCTURE/All_Flash_Array';
import Converged_Inf from '../Services/IT_INFRUSTRUCTURE/Converged_Infrastructure';
import Networking from '../Services/IT_INFRUSTRUCTURE/Networking';


class PageController extends Component{



    render(){


    return(
        <ProdFill></ProdFill>


    );    

    }


}

export default PageController;