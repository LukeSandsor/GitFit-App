import React, {useState, useEffect} from 'react';
import './BMIPage.css';
import NavBar from '../NavBar';
import axios from 'axios';


// The brains of the BMI Calcultor. Calculates a theoretical BMI based on given height and weight
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
    return Math.round(weight / Math.pow(height,2) * 703 * 10) / 10;
}






// Main return for the BMI Page.
// The return contains the NavBar, the Calculation Info Block, the BMI Bubble, the BMI calculator, and the BMI table.
// The BMI table is composed of many cells that have a class that determines their color. At the start of the row,
// there is a table header which labels the height, and each column thereafter represents a weight.
function BMIPage()
{
    const [User, setUser] = useState({});

    async function getUser() {
        try {
        // returns the first user in the database (to be modified later)
     //    const response = await axios.get('https://gitfit.lucasreyna.me/user');
        const response = await axios.get('http://localhost:2414/user');
     //    console.log(response.data);
        return response.data[0];
        } catch (error) {
        console.log(error);
        return false;
        }
    }

    useEffect(() => {
        getUser().then((result) => {
          if (result) {
            setUser(result);
          }
        });
      }, []); // only load on first render


    return (
        <div>
            <NavBar/>
            <h1>BMI</h1>
            <div>
               <div className="block--calcInfo">
                    {/* <br></br>
                    <label style={{textAlign: "center"}}>
                              <text style={{color: 'white', fontSize: 32}}>BMI is calculated with the folowing formula:</text>                  
                    </label>
                    <br></br> */}
                    <br></br>
                    <label style={{textAlign: "center"}}>
                              <text style={{color: 'white', fontSize: 40}}>BMI = Weight (lbs) / Height<sup>2</sup> (in<sup>2</sup>) x 703</text>                  
                    </label>
                    <br></br>
                    <br></br>
                    <table width="100%" className='centeredBMI'>
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
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>36</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellExtremelyObese'>40</td>
                              <td className='tableCellExtremelyObese'>42</td>
                              <td className='tableCellExtremelyObese'>44</td>
                              <td className='tableCellExtremelyObese'>46</td>
                              <td className='tableCellExtremelyObese'>48</td>
                              <td className='tableCellExtremelyObese'>50</td>
                              <td className='tableCellExtremelyObese'>52</td>
                              <td className='tableCellExtremelyObese'>54</td>
                              <td className='tableCellExtremelyObese'>56</td>
                              <td className='tableCellExtremelyObese'>59</td>
                              <td className='tableCellExtremelyObese'>61</td>
                         </tr>
                         <tr>
                              <th>4'11"</th>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>36</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellExtremelyObese'>40</td>
                              <td className='tableCellExtremelyObese'>42</td>
                              <td className='tableCellExtremelyObese'>44</td>
                              <td className='tableCellExtremelyObese'>46</td>
                              <td className='tableCellExtremelyObese'>48</td>
                              <td className='tableCellExtremelyObese'>51</td>
                              <td className='tableCellExtremelyObese'>53</td>
                              <td className='tableCellExtremelyObese'>55</td>
                              <td className='tableCellExtremelyObese'>57</td>
                              <td className='tableCellExtremelyObese'>59</td>
                         </tr>
                         <tr>
                              <th>5'0"</th>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>35</td>
                              <td className='tableCellObese'>37</td>
                              <td className='tableCellObese'>39</td>
                              <td className='tableCellExtremelyObese'>41</td>
                              <td className='tableCellExtremelyObese'>43</td>
                              <td className='tableCellExtremelyObese'>45</td>
                              <td className='tableCellExtremelyObese'>47</td>
                              <td className='tableCellExtremelyObese'>49</td>
                              <td className='tableCellExtremelyObese'>51</td>
                              <td className='tableCellExtremelyObese'>53</td>
                              <td className='tableCellExtremelyObese'>55</td>
                              <td className='tableCellExtremelyObese'>57</td>
                         </tr>
                         <tr>
                              <th>5'1"</th>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>36</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellExtremelyObese'>40</td>
                              <td className='tableCellExtremelyObese'>42</td>
                              <td className='tableCellExtremelyObese'>43</td>
                              <td className='tableCellExtremelyObese'>45</td>
                              <td className='tableCellExtremelyObese'>47</td>
                              <td className='tableCellExtremelyObese'>49</td>
                              <td className='tableCellExtremelyObese'>51</td>
                              <td className='tableCellExtremelyObese'>53</td>
                              <td className='tableCellExtremelyObese'>55</td>
                         </tr>
                         <tr>
                              <th>5'2"</th>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>35</td>
                              <td className='tableCellObese'>37</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellExtremelyObese'>40</td>
                              <td className='tableCellExtremelyObese'>42</td>
                              <td className='tableCellExtremelyObese'>44</td>
                              <td className='tableCellExtremelyObese'>46</td>
                              <td className='tableCellExtremelyObese'>48</td>
                              <td className='tableCellExtremelyObese'>49</td>
                              <td className='tableCellExtremelyObese'>51</td>
                              <td className='tableCellExtremelyObese'>53</td>
                         </tr>
                         <tr>
                              <th>5'3"</th>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>35</td>
                              <td className='tableCellObese'>37</td>
                              <td className='tableCellObese'>39</td>
                              <td className='tableCellExtremelyObese'>41</td>
                              <td className='tableCellExtremelyObese'>43</td>
                              <td className='tableCellExtremelyObese'>44</td>
                              <td className='tableCellExtremelyObese'>46</td>
                              <td className='tableCellExtremelyObese'>48</td>
                              <td className='tableCellExtremelyObese'>50</td>
                              <td className='tableCellExtremelyObese'>51</td>
                         </tr>
                         <tr>
                              <th>5'4"</th>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>36</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellObese'>39</td>
                              <td className='tableCellExtremelyObese'>41</td>
                              <td className='tableCellExtremelyObese'>43</td>
                              <td className='tableCellExtremelyObese'>45</td>
                              <td className='tableCellExtremelyObese'>46</td>
                              <td className='tableCellExtremelyObese'>48</td>
                              <td className='tableCellExtremelyObese'>50</td>
                         </tr>
                         <tr>
                              <th>5'5"</th>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>35</td>
                              <td className='tableCellObese'>37</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellExtremelyObese'>40</td>
                              <td className='tableCellExtremelyObese'>42</td>
                              <td className='tableCellExtremelyObese'>43</td>
                              <td className='tableCellExtremelyObese'>45</td>
                              <td className='tableCellExtremelyObese'>47</td>
                              <td className='tableCellExtremelyObese'>48</td>
                         </tr>
                         <tr>
                              <th>5'6"</th>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>36</td>
                              <td className='tableCellObese'>37</td>
                              <td className='tableCellObese'>39</td>
                              <td className='tableCellExtremelyObese'>40</td>
                              <td className='tableCellExtremelyObese'>42</td>
                              <td className='tableCellExtremelyObese'>44</td>
                              <td className='tableCellExtremelyObese'>45</td>
                              <td className='tableCellExtremelyObese'>47</td>
                         </tr>
                         <tr>
                              <th>5'7"</th>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>36</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellObese'>39</td>
                              <td className='tableCellExtremelyObese'>41</td>
                              <td className='tableCellExtremelyObese'>42</td>
                              <td className='tableCellExtremelyObese'>44</td>
                              <td className='tableCellExtremelyObese'>45</td>
                         </tr>
                         <tr>
                              <th>5'8"</th>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>35</td>
                              <td className='tableCellObese'>37</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellExtremelyObese'>40</td>
                              <td className='tableCellExtremelyObese'>41</td>
                              <td className='tableCellExtremelyObese'>43</td>
                              <td className='tableCellExtremelyObese'>44</td>
                         </tr>
                         <tr>
                              <th>5'9"</th>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>35</td>
                              <td className='tableCellObese'>37</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellExtremelyObese'>40</td>
                              <td className='tableCellExtremelyObese'>41</td>
                              <td className='tableCellExtremelyObese'>43</td>
                         </tr>
                         <tr>
                              <th>5'10"</th>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>36</td>
                              <td className='tableCellObese'>37</td>
                              <td className='tableCellObese'>39</td>
                              <td className='tableCellExtremelyObese'>40</td>
                              <td className='tableCellExtremelyObese'>42</td>
                         </tr>
                         <tr>
                              <th>5'11"</th>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>35</td>
                              <td className='tableCellObese'>36</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellObese'>39</td>
                              <td className='tableCellExtremelyObese'>40</td>
                         </tr>
                         <tr>
                              <th>6'0"</th>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>35</td>
                              <td className='tableCellObese'>37</td>
                              <td className='tableCellObese'>38</td>
                              <td className='tableCellObese'>39</td>
                         </tr>
                         <tr>
                              <th>6'1"</th>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>36</td>
                              <td className='tableCellObese'>37</td>
                              <td className='tableCellObese'>38</td>
                         </tr>
                         <tr>
                              <th>6'2"</th>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>35</td>
                              <td className='tableCellObese'>36</td>
                              <td className='tableCellObese'>37</td>
                         </tr>
                         <tr>
                              <th>6'3"</th>
                              <td className='tableCellUnderweight'>11</td>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>35</td>
                              <td className='tableCellObese'>36</td>
                         </tr>
                         <tr>
                              <th>6'4"</th>
                              <td className='tableCellUnderweight'>11</td>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>34</td>
                              <td className='tableCellObese'>35</td>
                         </tr>
                         <tr>
                              <th>6'5"</th>
                              <td className='tableCellUnderweight'>11</td>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>33</td>
                              <td className='tableCellObese'>34</td>
                         </tr>
                         <tr>
                              <th>6'6"</th>
                              <td className='tableCellUnderweight'>10</td>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>34</td>
                         </tr>
                         <tr>
                              <th>6'7"</th>
                              <td className='tableCellUnderweight'>10</td>
                              <td className='tableCellUnderweight'>11</td>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>32</td>
                              <td className='tableCellObese'>33</td>
                         </tr>
                         <tr>
                              <th>6'8"</th>
                              <td className='tableCellUnderweight'>10</td>
                              <td className='tableCellUnderweight'>11</td>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>31</td>
                              <td className='tableCellObese'>32</td>
                         </tr>
                         <tr>
                              <th>6'9"</th>
                              <td className='tableCellUnderweight'>10</td>
                              <td className='tableCellUnderweight'>11</td>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                              <td className='tableCellObese'>31</td>
                         </tr>
                         <tr>
                              <th>6'10"</th>
                              <td className='tableCellUnderweight'>9</td>
                              <td className='tableCellUnderweight'>10</td>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellHealthy'>24</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                         </tr>
                         <tr>
                              <th>6'11"</th>
                              <td className='tableCellUnderweight'>9</td>
                              <td className='tableCellUnderweight'>10</td>
                              <td className='tableCellUnderweight'>11</td>
                              <td className='tableCellUnderweight'>12</td>
                              <td className='tableCellUnderweight'>13</td>
                              <td className='tableCellUnderweight'>14</td>
                              <td className='tableCellUnderweight'>15</td>
                              <td className='tableCellUnderweight'>16</td>
                              <td className='tableCellUnderweight'>17</td>
                              <td className='tableCellUnderweight'>18</td>
                              <td className='tableCellHealthy'>19</td>
                              <td className='tableCellHealthy'>20</td>
                              <td className='tableCellHealthy'>21</td>
                              <td className='tableCellHealthy'>22</td>
                              <td className='tableCellHealthy'>23</td>
                              <td className='tableCellOverweight'>25</td>
                              <td className='tableCellOverweight'>26</td>
                              <td className='tableCellOverweight'>27</td>
                              <td className='tableCellOverweight'>28</td>
                              <td className='tableCellOverweight'>29</td>
                              <td className='tableCellObese'>30</td>
                         </tr>
                    </table>

               </div>

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
                              <text style={{color: 'white', fontSize: 96}} id="user_BMI" value="">{Math.round(User.weight / Math.pow(User.height,2) * 703 * 10) / 10}*</text>                  
                         </label>
                    </div>
               </div>
               <br></br>
               <div className="calculator">
                         <br></br>
                         <label style={{textAlign: "left"}}>
                              <text style={{color: 'white', fontSize: 40}}>BMI Calculator</text>
                         </label>
                         <br></br>
                         <br></br>
                         <br></br>
                         <label style={{textAlign: "left"}}>
                              <text style={{color: 'white', fontSize: 28}}>Enter Height</text>
                              <br></br>
                              <input type="number" placeholder='Inches' name="Push" id="height"/>
                         </label>
                         <div id="heightError"></div> 
                         <br></br>
                         <br></br>
                         <label style={{textAlign: "left"}}>
                              <text style={{color: 'white', fontSize: 28}}>Enter Weight</text>
                              <br></br>
                              <input type="number" placeholder='Pounds' name="Push" id="weight"/>
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
           <br></br>
           <br></br>
           <br></br>
           <br></br>
        </div>
    );
}

export default BMIPage;