import React from 'react';
// import {Link} from 'react-router-dom';
import './WeightsPage.css';
import './BMIPage.css';
import NavBar from '../NavBar';

function calculateBMI(height, weight, BMI, heightError, weightError){
    var flag = 0;
    heightError.innerHTML = " ";
    weightError.innerHTML = " ";
    if(height <= 0){
        BMI.innerHTML = " ";
        heightError.innerHTML = "Not a valid height";
        flag = 1;
    }
    if(weight <= 0){
        BMI.innerHTML = " ";
        weightError.innerHTML = "Not a valid weight";
        flag = 1;
    }
    if(!flag){
        BMI.innerHTML = Math.round(weight / Math.pow(height,2) * 703 * 10) / 10;
        heightError.innerHTML = " ";
        weightError.innerHTML = " ";
    }
}

function WeightsPage()
{

    return (
        <div>
            <NavBar/>
            <h1>BMI</h1>
            <div className="block--calcInfo2">
                <br></br>
                <label style={{textAlign: "center"}}>
                            <text style={{color: 'white', fontSize: 32}}>BMI is calculated with the folowing formula:</text>                  
                </label>
                <br></br>
                <br></br>
                <label style={{textAlign: "center"}}>
                            <text style={{color: 'white', fontSize: 40}}>BMI = Weight (lbs) / Height^2 (in^2) x 703</text>                  
                </label>
            </div>
            <div id="circleWrapper">
                <div id="circlePulse"></div>
                <div id="navi"></div>
                <div id="infoi">
                    <br></br>
                    <br></br>
                    <label style={{textAlign: "center"}}>
                            <text style={{color: 'white', fontSize: 32}}>Your BMI:</text>                  
                    </label>
                    <br></br>
                    <label style={{textAlign: "center"}}>
                            <text style={{color: 'white', fontSize: 96}}>56.3</text>                  
                    </label>
                </div>
            </div>
           <br></br>
           <table className='centeredBMI'>
               <tr className='tableRowBMI'>
                   <th className='tableHeaderBMI' rowSpan="30">Height (ft'in")</th>
                   <th className='tableHeaderBMI' colSpan="22">Weight (lbs)</th>
               </tr>
               <tr>
                   <th className='tableHeaderBMI'></th>
                   <th className='tableHeaderBMI'>90</th>
                   <th className='tableHeaderBMI'>100</th>
                   <th className='tableHeaderBMI'>110</th>
                   <th className='tableHeaderBMI'>120</th>
                   <th className='tableHeaderBMI'>130</th>
                   <th className='tableHeaderBMI'>140</th>
                   <th className='tableHeaderBMI'>150</th>
                   <th className='tableHeaderBMI'>160</th>
                   <th className='tableHeaderBMI'>170</th>
                   <th className='tableHeaderBMI'>180</th>
                   <th className='tableHeaderBMI'>190</th>
                   <th className='tableHeaderBMI'>200</th>
                   <th className='tableHeaderBMI'>210</th>
                   <th className='tableHeaderBMI'>220</th>
                   <th className='tableHeaderBMI'>230</th>
                   <th className='tableHeaderBMI'>240</th>
                   <th className='tableHeaderBMI'>250</th>
                   <th className='tableHeaderBMI'>260</th>
                   <th className='tableHeaderBMI'>270</th>
                   <th className='tableHeaderBMI'>280</th>
                   <th className='tableHeaderBMI'>290</th>
               </tr>
               <tr>
                    <th>4'8"</th>
                    <td className='tableCellHealthy'>20</td>
                   <td className='tableCellHealthy'>22</td>
                   <td className='tableCellOverweight'>25</td>
                   <td className='tableCellOverweight'>27</td>
                   <td className='tableCellOverweight'>29</td>
                   <td className='tableCellObese'>31</td>
                   <td className='tableCellObese'>34</td>
                   <td className='tableCellObese'>36</td>
                   <td className='tableCellObese'>38</td>
                   <td className='tableCellExtremelyObese'>40</td>
                   <td className='tableCellExtremelyObese'>43</td>
                   <td className='tableCellExtremelyObese'>45</td>
                   <td className='tableCellExtremelyObese'>47</td>
                   <td className='tableCellExtremelyObese'>49</td>
                   <td className='tableCellExtremelyObese'>52</td>
                   <td className='tableCellExtremelyObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>4'9"</th>
                    <td className='tableCellHealthy'>19</td>
                   <td className='tableCellHealthy'>22</td>
                   <td className='tableCellHealthy'>24</td>
                   <td className='tableCellOverweight'>26</td>
                   <td className='tableCellOverweight'>28</td>
                   <td className='tableCellObese'>30</td>
                   <td className='tableCellObese'>32</td>
                   <td className='tableCellObese'>35</td>
                   <td className='tableCellObese'>37</td>
                   <td className='tableCellObese'>39</td>
                   <td className='tableCellExtremelyObese'>41</td>
                   <td className='tableCellExtremelyObese'>43</td>
                   <td className='tableCellExtremelyObese'>45</td>
                   <td className='tableCellExtremelyObese'>48</td>
                   <td className='tableCellExtremelyObese'>50</td>
                   <td className='tableCellExtremelyObese'>52</td>
                   <td className='tableCellExtremelyObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
               </tr>
               <tr>
                    <th>4'10"</th>
                    <td className='tableCellHealthy'>20</td>
                   <td className='tableCellHealthy'>22</td>
                   <td className='tableCellHealthy'>25</td>
                   <td className='tableCellOverweight'>27</td>
                   <td className='tableCellOverweight'>29</td>
                   <td className='tableCellOverweight'>31</td>
                   <td className='tableCellObese'>34</td>
                   <td className='tableCellObese'>36</td>
                   <td className='tableCellObese'>38</td>
                   <td className='tableCellObese'>40</td>
                   <td className='tableCellExtremelyObese'>43</td>
                   <td className='tableCellExtremelyObese'>45</td>
                   <td className='tableCellExtremelyObese'>47</td>
                   <td className='tableCellExtremelyObese'>49</td>
                   <td className='tableCellExtremelyObese'>52</td>
                   <td className='tableCellExtremelyObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>4'11"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellHealthy'>22</td>
                   <td className='tableCellHealthy'>25</td>
                   <td className='tableCellHealthy'>27</td>
                   <td className='tableCellOverweight'>29</td>
                   <td className='tableCellOverweight'>31</td>
                   <td className='tableCellObese'>34</td>
                   <td className='tableCellObese'>36</td>
                   <td className='tableCellObese'>38</td>
                   <td className='tableCellObese'>40</td>
                   <td className='tableCellObese'>43</td>
                   <td className='tableCellExtremelyObese'>45</td>
                   <td className='tableCellExtremelyObese'>47</td>
                   <td className='tableCellExtremelyObese'>49</td>
                   <td className='tableCellExtremelyObese'>52</td>
                   <td className='tableCellExtremelyObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'0"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellHealthy'>22</td>
                   <td className='tableCellHealthy'>25</td>
                   <td className='tableCellHealthy'>27</td>
                   <td className='tableCellOverweight'>29</td>
                   <td className='tableCellOverweight'>31</td>
                   <td className='tableCellOverweight'>34</td>
                   <td className='tableCellObese'>36</td>
                   <td className='tableCellObese'>38</td>
                   <td className='tableCellObese'>40</td>
                   <td className='tableCellObese'>43</td>
                   <td className='tableCellObese'>45</td>
                   <td className='tableCellExtremelyObese'>47</td>
                   <td className='tableCellExtremelyObese'>49</td>
                   <td className='tableCellExtremelyObese'>52</td>
                   <td className='tableCellExtremelyObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'1"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellHealthy'>22</td>
                   <td className='tableCellHealthy'>25</td>
                   <td className='tableCellHealthy'>27</td>
                   <td className='tableCellOverweight'>29</td>
                   <td className='tableCellOverweight'>31</td>
                   <td className='tableCellOverweight'>34</td>
                   <td className='tableCellObese'>36</td>
                   <td className='tableCellObese'>38</td>
                   <td className='tableCellObese'>40</td>
                   <td className='tableCellObese'>43</td>
                   <td className='tableCellObese'>45</td>
                   <td className='tableCellExtremelyObese'>47</td>
                   <td className='tableCellExtremelyObese'>49</td>
                   <td className='tableCellExtremelyObese'>52</td>
                   <td className='tableCellExtremelyObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'2"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellHealthy'>25</td>
                   <td className='tableCellHealthy'>27</td>
                   <td className='tableCellHealthy'>29</td>
                   <td className='tableCellOverweight'>31</td>
                   <td className='tableCellOverweight'>34</td>
                   <td className='tableCellOverweight'>36</td>
                   <td className='tableCellObese'>38</td>
                   <td className='tableCellObese'>40</td>
                   <td className='tableCellObese'>43</td>
                   <td className='tableCellObese'>45</td>
                   <td className='tableCellObese'>47</td>
                   <td className='tableCellExtremelyObese'>49</td>
                   <td className='tableCellExtremelyObese'>52</td>
                   <td className='tableCellExtremelyObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'3"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellHealthy'>25</td>
                   <td className='tableCellHealthy'>27</td>
                   <td className='tableCellHealthy'>29</td>
                   <td className='tableCellOverweight'>31</td>
                   <td className='tableCellOverweight'>34</td>
                   <td className='tableCellOverweight'>36</td>
                   <td className='tableCellObese'>38</td>
                   <td className='tableCellObese'>40</td>
                   <td className='tableCellObese'>43</td>
                   <td className='tableCellObese'>45</td>
                   <td className='tableCellObese'>47</td>
                   <td className='tableCellObese'>49</td>
                   <td className='tableCellExtremelyObese'>52</td>
                   <td className='tableCellExtremelyObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'4"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellHealthy'>25</td>
                   <td className='tableCellHealthy'>27</td>
                   <td className='tableCellHealthy'>29</td>
                   <td className='tableCellHealthy'>31</td>
                   <td className='tableCellOverweight'>34</td>
                   <td className='tableCellOverweight'>36</td>
                   <td className='tableCellOverweight'>38</td>
                   <td className='tableCellObese'>40</td>
                   <td className='tableCellObese'>43</td>
                   <td className='tableCellObese'>45</td>
                   <td className='tableCellObese'>47</td>
                   <td className='tableCellObese'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellExtremelyObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'5"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellHealthy'>27</td>
                   <td className='tableCellHealthy'>29</td>
                   <td className='tableCellHealthy'>31</td>
                   <td className='tableCellOverweight'>34</td>
                   <td className='tableCellOverweight'>36</td>
                   <td className='tableCellOverweight'>38</td>
                   <td className='tableCellObese'>40</td>
                   <td className='tableCellObese'>43</td>
                   <td className='tableCellObese'>45</td>
                   <td className='tableCellObese'>47</td>
                   <td className='tableCellObese'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellExtremelyObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'6"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellHealthy'>27</td>
                   <td className='tableCellHealthy'>29</td>
                   <td className='tableCellHealthy'>31</td>
                   <td className='tableCellHealthy'>34</td>
                   <td className='tableCellOverweight'>36</td>
                   <td className='tableCellOverweight'>38</td>
                   <td className='tableCellOverweight'>40</td>
                   <td className='tableCellObese'>43</td>
                   <td className='tableCellObese'>45</td>
                   <td className='tableCellObese'>47</td>
                   <td className='tableCellObese'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellObese'>54</td>
                   <td className='tableCellExtremelyObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'7"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellHealthy'>27</td>
                   <td className='tableCellHealthy'>29</td>
                   <td className='tableCellHealthy'>31</td>
                   <td className='tableCellHealthy'>34</td>
                   <td className='tableCellOverweight'>36</td>
                   <td className='tableCellOverweight'>38</td>
                   <td className='tableCellOverweight'>40</td>
                   <td className='tableCellObese'>43</td>
                   <td className='tableCellObese'>45</td>
                   <td className='tableCellObese'>47</td>
                   <td className='tableCellObese'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellObese'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'8"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellHealthy'>29</td>
                   <td className='tableCellHealthy'>31</td>
                   <td className='tableCellHealthy'>34</td>
                   <td className='tableCellHealthy'>36</td>
                   <td className='tableCellOverweight'>38</td>
                   <td className='tableCellOverweight'>40</td>
                   <td className='tableCellOverweight'>43</td>
                   <td className='tableCellObese'>45</td>
                   <td className='tableCellObese'>47</td>
                   <td className='tableCellObese'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellObese'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellExtremelyObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'9"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellHealthy'>29</td>
                   <td className='tableCellHealthy'>31</td>
                   <td className='tableCellHealthy'>34</td>
                   <td className='tableCellHealthy'>36</td>
                   <td className='tableCellOverweight'>38</td>
                   <td className='tableCellOverweight'>40</td>
                   <td className='tableCellOverweight'>43</td>
                   <td className='tableCellObese'>45</td>
                   <td className='tableCellObese'>47</td>
                   <td className='tableCellObese'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellObese'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellObese'>58</td>
                   <td className='tableCellExtremelyObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'10"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellHealthy'>29</td>
                   <td className='tableCellHealthy'>31</td>
                   <td className='tableCellHealthy'>34</td>
                   <td className='tableCellHealthy'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellOverweight'>40</td>
                   <td className='tableCellOverweight'>43</td>
                   <td className='tableCellOverweight'>45</td>
                   <td className='tableCellObese'>47</td>
                   <td className='tableCellObese'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellObese'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellObese'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellExtremelyObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>5'11"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellHealthy'>31</td>
                   <td className='tableCellHealthy'>34</td>
                   <td className='tableCellHealthy'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellOverweight'>40</td>
                   <td className='tableCellOverweight'>43</td>
                   <td className='tableCellOverweight'>45</td>
                   <td className='tableCellOverweight'>47</td>
                   <td className='tableCellObese'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellObese'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellObese'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellExtremelyObese'>65</td>
               </tr>
               <tr>
                    <th>6'0"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellHealthy'>31</td>
                   <td className='tableCellHealthy'>34</td>
                   <td className='tableCellHealthy'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellOverweight'>43</td>
                   <td className='tableCellOverweight'>45</td>
                   <td className='tableCellOverweight'>47</td>
                   <td className='tableCellObese'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellObese'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellObese'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'1"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellHealthy'>34</td>
                   <td className='tableCellHealthy'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellOverweight'>43</td>
                   <td className='tableCellOverweight'>45</td>
                   <td className='tableCellOverweight'>47</td>
                   <td className='tableCellOverweight'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellObese'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellObese'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'2"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellHealthy'>34</td>
                   <td className='tableCellHealthy'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellHealthy'>43</td>
                   <td className='tableCellOverweight'>45</td>
                   <td className='tableCellOverweight'>47</td>
                   <td className='tableCellOverweight'>49</td>
                   <td className='tableCellObese'>52</td>
                   <td className='tableCellObese'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellObese'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'3"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellHealthy'>34</td>
                   <td className='tableCellHealthy'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellHealthy'>43</td>
                   <td className='tableCellOverweight'>45</td>
                   <td className='tableCellOverweight'>47</td>
                   <td className='tableCellOverweight'>49</td>
                   <td className='tableCellOverweight'>52</td>
                   <td className='tableCellObese'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellObese'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'4"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellUnderweight'>34</td>
                   <td className='tableCellHealthy'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellHealthy'>43</td>
                   <td className='tableCellHealthy'>45</td>
                   <td className='tableCellOverweight'>47</td>
                   <td className='tableCellOverweight'>49</td>
                   <td className='tableCellOverweight'>52</td>
                   <td className='tableCellOverweight'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellObese'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'5"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellUnderweight'>34</td>
                   <td className='tableCellHealthy'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellHealthy'>43</td>
                   <td className='tableCellHealthy'>45</td>
                   <td className='tableCellOverweight'>47</td>
                   <td className='tableCellOverweight'>49</td>
                   <td className='tableCellOverweight'>52</td>
                   <td className='tableCellOverweight'>54</td>
                   <td className='tableCellObese'>56</td>
                   <td className='tableCellObese'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'6"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellUnderweight'>34</td>
                   <td className='tableCellUnderweight'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellHealthy'>43</td>
                   <td className='tableCellHealthy'>45</td>
                   <td className='tableCellHealthy'>47</td>
                   <td className='tableCellOverweight'>49</td>
                   <td className='tableCellOverweight'>52</td>
                   <td className='tableCellOverweight'>54</td>
                   <td className='tableCellOverweight'>56</td>
                   <td className='tableCellObese'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'7"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellUnderweight'>34</td>
                   <td className='tableCellUnderweight'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellHealthy'>43</td>
                   <td className='tableCellHealthy'>45</td>
                   <td className='tableCellHealthy'>47</td>
                   <td className='tableCellOverweight'>49</td>
                   <td className='tableCellOverweight'>52</td>
                   <td className='tableCellOverweight'>54</td>
                   <td className='tableCellOverweight'>56</td>
                   <td className='tableCellOverweight'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'8"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellUnderweight'>34</td>
                   <td className='tableCellUnderweight'>36</td>
                   <td className='tableCellHealthy'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellHealthy'>43</td>
                   <td className='tableCellHealthy'>45</td>
                   <td className='tableCellHealthy'>47</td>
                   <td className='tableCellHealthy'>49</td>
                   <td className='tableCellOverweight'>52</td>
                   <td className='tableCellOverweight'>54</td>
                   <td className='tableCellOverweight'>56</td>
                   <td className='tableCellOverweight'>58</td>
                   <td className='tableCellObese'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'9"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellUnderweight'>34</td>
                   <td className='tableCellUnderweight'>36</td>
                   <td className='tableCellUnderweight'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellHealthy'>43</td>
                   <td className='tableCellHealthy'>45</td>
                   <td className='tableCellHealthy'>47</td>
                   <td className='tableCellHealthy'>49</td>
                   <td className='tableCellOverweight'>52</td>
                   <td className='tableCellOverweight'>54</td>
                   <td className='tableCellOverweight'>56</td>
                   <td className='tableCellOverweight'>58</td>
                   <td className='tableCellOverweight'>61</td>
                   <td className='tableCellObese'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'10"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellUnderweight'>34</td>
                   <td className='tableCellUnderweight'>36</td>
                   <td className='tableCellUnderweight'>38</td>
                   <td className='tableCellHealthy'>40</td>
                   <td className='tableCellHealthy'>43</td>
                   <td className='tableCellHealthy'>45</td>
                   <td className='tableCellHealthy'>47</td>
                   <td className='tableCellHealthy'>49</td>
                   <td className='tableCellHealthy'>52</td>
                   <td className='tableCellOverweight'>54</td>
                   <td className='tableCellOverweight'>56</td>
                   <td className='tableCellOverweight'>58</td>
                   <td className='tableCellOverweight'>61</td>
                   <td className='tableCellOverweight'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
               <tr>
                    <th>6'11"</th>
                    <td className='tableCellUnderweight'>20</td>
                   <td className='tableCellUnderweight'>22</td>
                   <td className='tableCellUnderweight'>25</td>
                   <td className='tableCellUnderweight'>27</td>
                   <td className='tableCellUnderweight'>29</td>
                   <td className='tableCellUnderweight'>31</td>
                   <td className='tableCellUnderweight'>34</td>
                   <td className='tableCellUnderweight'>36</td>
                   <td className='tableCellUnderweight'>38</td>
                   <td className='tableCellUnderweight'>40</td>
                   <td className='tableCellHealthy'>43</td>
                   <td className='tableCellHealthy'>45</td>
                   <td className='tableCellHealthy'>47</td>
                   <td className='tableCellHealthy'>49</td>
                   <td className='tableCellHealthy'>52</td>
                   <td className='tableCellOverweight'>54</td>
                   <td className='tableCellOverweight'>56</td>
                   <td className='tableCellOverweight'>58</td>
                   <td className='tableCellOverweight'>61</td>
                   <td className='tableCellOverweight'>63</td>
                   <td className='tableCellObese'>65</td>
               </tr>
           </table>
           <br></br>
           <br></br>
           <br></br>
            <div className="calculator">
                <br></br>
                <br></br>
                <br></br>
                <label style={{textAlign: "left"}}>
                        <text style={{color: 'white', fontSize: 40}}>Enter Height</text>
                        <br></br>
                    <input type="number" name="Push" id="height"/>
                </label>
                <div id="heightError"></div> 
                <br></br>
                <br></br>
                <label style={{textAlign: "left"}}>
                        <text style={{color: 'white', fontSize: 40}}>Enter Weight</text>
                        <br></br>
                    <input type="number" name="Push" id="weight"/>
                </label>
                <div id="weightError"></div> 
                <br></br>
                <br></br>
                <br></br>
                <text style={{color: 'white', fontSize: 40}}>---------------</text>
                <br></br>
                <br></br>
                <br></br>
                <text style={{color: 'white', fontSize: 28}}>Calculated BMI:</text>
                <br></br>
                <br></br>
                <text style={{color: 'white', fontSize: 66}} id="BMI"></text>
                <br></br>
                <br></br>
                <input type="button" onClick={() => calculateBMI(+document.getElementById('height').value, +document.getElementById('weight').value, document.getElementById('BMI'), document.getElementById('heightError'), document.getElementById('weightError'))} value="Calculate" id="Calculate"/>
            </div>
        </div>






































    // return (
    //     <div>
    //         <NavBar/>
    //         <h1>BMI</h1>
    //         <div class="block--calcInfo">
    //             <br></br>
    //             <label style={{textAlign: "center"}}>
    //                         <text style={{color: 'white', fontSize: 32}}>BMI is calculated with the folowing formula:</text>                  
    //             </label>
    //             <br></br>
    //             <br></br>
    //             <label style={{textAlign: "center"}}>
    //                         <text style={{color: 'white', fontSize: 40}}>BMI = Weight (lbs) / Height^2 (in^2) x 703</text>                  
    //             </label>
    //         </div>
    //         <div class="circle">
    //         </div>
    //         <div class="circleText">
    //             <br></br>
    //             <br></br>
    //             <label style={{textAlign: "center"}}>
    //                     <text style={{color: 'white', fontSize: 32}}>Your BMI:</text>                  
    //             </label>
    //             <br></br>
    //             <label style={{textAlign: "center"}}>
    //                     <text style={{color: 'white', fontSize: 96}}>56.3</text>                  
    //             </label>
    //         </div>
    //         <div class="calculator">
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <label style={{textAlign: "left"}}>
    //                     <text style={{color: 'white', fontSize: 40}}>Enter Height</text>
    //                     <br></br>
    //                 <input type="number" name="Push" id="height"/>
    //             </label>
    //             <div id="heightError"></div> 
    //             <br></br>
    //             <br></br>
    //             <label style={{textAlign: "left"}}>
    //                     <text style={{color: 'white', fontSize: 40}}>Enter Weight</text>
    //                     <br></br>
    //                 <input type="number" name="Push" id="weight"/>
    //             </label>
    //             <div id="weightError"></div> 
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <text style={{color: 'white', fontSize: 40}}>---------------</text>
    //             <br></br>
    //             <br></br>
    //             <br></br>
    //             <text style={{color: 'white', fontSize: 28}}>Calculated BMI:</text>
    //             <br></br>
    //             <br></br>
    //             <text style={{color: 'white', fontSize: 66}} id="BMI"></text>
    //             <br></br>
    //             <br></br>
    //             <input type="button" onClick={() => calculateBMI(+document.getElementById('height').value, +document.getElementById('weight').value, document.getElementById('BMI'), document.getElementById('heightError'), document.getElementById('weightError'))} value="Calculate" id="Calculate"/>
    //         </div>
    //         <div>
    //             <div class="weights">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'white', fontSize: 40}}>Weights</text>                  
    //                 </label>
    //             </div>
    //             <div class="heights">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'white', fontSize: 40}}>Heights</text>                  
    //                 </label>
    //             </div>
    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>



    //             <br></br>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-Healthy">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-Healthy">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-Healthy">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <br></br>





    //             <div class="col0-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col1-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col2-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col3-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col4-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col5-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col6-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col7-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col8-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col9-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col10-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col11-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col12-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col13-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col14-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col15-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col16-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col17-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col18-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col19-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col20-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //             <div class="col21-row0">
    //                 <label style={{textAlign: "center"}}>
    //                             <text style={{color: 'black', fontSize: 18}}>34</text>                  
    //                 </label>
    //             </div>
    //         </div>
    //     </div>
        
        
    );
}
/*<label style={{textAlign: "left"}}>
            <input type="text" name="Push" />
            </label>
            <input type="submit" value="Submit" />
            <label style={{padding: 18, textAlign: "center"}}>
            <input type="text" name="Pull" />
            </label>
            <input type="submit" value="Submit" />
            <label style={{padding: 18, textAlign: "right"}}>
            <input type="text" name="Leg" />
            </label>
            <input type="submit" value="Submit" />*/
export default WeightsPage;