import React from 'react'
import style from './Grid.scss'

function MyGrid() {
    return(
       <div className="wrapper">
           <div class="Grid Grid--full">
                <div class="Grid-cell">
                    <div class="Demo content-1of1">1</div>
                </div>
            </div>

            <div className="Grid Grid--gutters Grid--cols-2">
                    <div className="Grid-cell">
                        <div className="Demo content-1of2">1/2</div>
                    </div>   

                    <div className="Grid-cell">
                        <div className="Demo content-1of2">1/2</div>
                    </div>        
            </div>
            
            <div className="Grid Grid--gutters Grid--cols-3">
                    <div className="Grid-cell">
                        <div className="Demo content-1of3">1/3</div>
                    </div>   

                    <div className="Grid-cell">
                        <div className="Demo content-1of3">1/3</div>
                    </div>      

                    <div className="Grid-cell">
                        <div className="Demo content-1of3">1/3</div>
                    </div>       
            </div>

            <div className="Grid Grid--gutters Grid--cols-4">
                    <div className="Grid-cell">
                        <div className="Demo content-1of4">1/4</div>
                    </div>   

                    <div className="Grid-cell">
                        <div className="Demo content-1of4">1/4</div>
                    </div>      

                    <div className="Grid-cell">
                        <div className="Demo content-1of4">1/4</div>
                    </div>       

                    <div className="Grid-cell">
                        <div className="Demo content-1of4">1/4</div>
                    </div>       
            </div>

            <div className="Grid Grid--gutters Grid--cols-6">
                    <div className="Grid-cell">
                        <div className="Demo content-1of6">1/6</div>
                    </div>   

                    <div className="Grid-cell">
                        <div className="Demo content-1of6">1/6</div>
                    </div>      

                    <div className="Grid-cell">
                        <div className="Demo content-1of6">1/6</div>
                    </div>       

                    <div className="Grid-cell">
                        <div className="Demo content-1of6">1/6</div>
                    </div>       
                    <div className="Grid-cell">
                        <div className="Demo content-1of6">1/6</div>
                    </div>    
            </div>

            <div className="Grid Grid--gutters Grid--cols-12">
                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>

                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>

                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>

                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>

                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>

                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>


                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>


                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>


                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>

                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>


                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>

                <div className="Grid-cell">
                    <div className="Demo content-1of12">1/12</div>
                </div>
            </div>

            <div className="Grid Grid--gutters Grid--1of3">
            <div className="Grid-cell"><div className="Demo content-1of3">1/3</div></div>  
            <div className="Grid-cell"><div className="Demo">auto</div>
            </div>
        </div>

        <div class="Grid Grid--gutters Grid--1of3 Grid--nested">
            <div class="Grid-cell"><div class="Demo content-1of3">1/3</div></div>
            <div class="Grid-cell">
                <div class="Demo">     
                    <div class="Grid Grid--gutters Grid--1of3 Grid--nested">
                        <div class="Grid-cell"><div class="Demo content-1of3">1/3</div></div>
                         <div class="Grid-cell"><div class="Demo">
                    <div class="Grid Grid--gutters Grid--1of3 Grid--nested">
                        <div class="Grid-cell"><div class="Demo content-1of3">1/3</div></div>
                        <div class="Grid-cell"><div class="Demo">auto</div></div>
                    </div>        
            </div>
            </div>
      </div>      
    </div>
    </div>
  </div>
        </div>

        
        

        
    );
}

export default MyGrid;