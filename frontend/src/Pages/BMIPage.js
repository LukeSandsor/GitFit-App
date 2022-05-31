import React, {useState, useEffect} from 'react';
import './BMIPage.css';
import NavBar from '../NavBar';
import axios from 'axios';

const MIN_WEIGHT = 90;
const MAX_WEIGHT = 290;
const WEIGHT_INCREMENT = 10;

const MIN_HEIGHT = 56; // inches
const MAX_HEIGHT = 83;
const HEIGHT_INCREMENT = 1;

const INFO_SIZE = 3;
const NUM_COLS = ((MAX_WEIGHT - MIN_WEIGHT) / WEIGHT_INCREMENT) + INFO_SIZE;
const NUM_ROWS = ((MAX_HEIGHT - MIN_HEIGHT) / HEIGHT_INCREMENT) + INFO_SIZE;

// The brains of the BMI Calcultor. Calculates a theoretical BMI based on given height and weight
function calculateBMI(height, weight, BMI, heightError, weightError, heightText, weightText){
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
        heightText.value = height;
        weightText.value = weight;
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
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentUserData, setCurrentUserData] = useState({});

  async function getUserData() {
    await axios.get('https://gitfit.lucasreyna.me/passport/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then((res) => {
      if (res.status === 200) {
        setCurrentUserData(res.data);
      }
    }).catch((err) => {
      console.error(err);
    })
  }

  useEffect(() => {
    setCurrentUserName(localStorage.getItem('username'));
  }, []); // only load on first render

  useEffect(() => {
    if (currentUserData !== {}) {
      getUserData();
    }
  }, [currentUserName]);

  function getWeightArray() {
    let weightArray = [];
    for (let i = MIN_WEIGHT; i <= MAX_WEIGHT; i += WEIGHT_INCREMENT) {
      weightArray.push(i);
    }

    return weightArray;
  }

  function getHeightArray() {
    let heightArray = [];
    for (let i = MIN_HEIGHT; i <= MAX_HEIGHT; i += HEIGHT_INCREMENT) {
      heightArray.push(i);
    }

    return heightArray;
  }

  function renderBMIHeader()
  {
    let weightArray = getWeightArray();

    return (
      <tr>
        <th class="tableHeaderBMI"></th>
        {weightArray.map((weight) => {
          return <th class="tableHeaderBMI">{weight}</th>
        })}
      </tr>
    );
  }

  function inchesToString(inchVal) {
    let feet = Math.floor(inchVal / 12);
    inchVal %= 12;
    return `${feet}'${inchVal}"`
  }

  function getBMI(height, weight) {
    return Math.round(weight / Math.pow(height, 2) * 703);
  }

  function getHealthClass(bmiVal) {
    if (bmiVal < 19)
      return 'Underweight';
    if (bmiVal < 25)
      return 'Healthy';
    if (bmiVal < 30)
      return 'Overweight';
    if (bmiVal < 40)
      return 'Obese';
    
    return 'ExtremelyObese';
  }

  function renderBMIColorTable() {
    let weightArray = getWeightArray();
    let heightArray = getHeightArray();

    return (
      heightArray.map((height) => {
        return (
          <tr>
            <th>{inchesToString(height)}</th>
            {weightArray.map((weight) => {
              let bmiVal = getBMI(height, weight);
              return (
                <td className={`tableCell${getHealthClass(bmiVal)}`} 
                    onClick={() => calculateBMI(height, weight, 
                                                document.getElementById('BMI'), 
                                                document.getElementById('heightError'),
                                                document.getElementById('weightError'), 
                                                document.getElementById('height'), 
                                                document.getElementById('weight'))}>{bmiVal}</td>
              );
            })}
          </tr>
        );
      })
    );
  }

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
                            <span style={{color: 'white', fontSize: 40}}>BMI = Weight (lbs) / Height<sup>2</sup> (in<sup>2</sup>) x 703</span>                  
                  </label>
                  <br></br>
                  <br></br>
                  <table width="100%" className='centeredBMI'>
                    <tr className='tableRowBMI'>
                      <th className='tableHeaderBMI' rowSpan={NUM_ROWS}>Height (ft'in")</th>
                      <th className='tableHeaderBMI' colSpan={NUM_COLS}>Weight (lbs)</th>
                    </tr>
                    {renderBMIHeader()}
                    {renderBMIColorTable()}
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
                            <span style={{color: 'white', fontSize: 32}}>Your BMI:</span>                  
                        </label>
                        <br></br>
                        <label style={{textAlign: "center"}}>
                            <span style={{color: 'white', fontSize: 96}} id="user_BMI" value="">{Math.round(currentUserData.weight / Math.pow(currentUserData.height,2) * 703 * 10) / 10}</span>                  
                        </label>
                  </div>
              </div>
              <br></br>
              <div className="calculator">
                        <br></br>
                        <label style={{textAlign: "left"}}>
                            <span style={{color: 'white', fontSize: 40}}>BMI Calculator</span>
                        </label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <label style={{textAlign: "left"}}>
                            <span style={{color: 'white', fontSize: 28}}>Enter Height</span>
                            <br></br>
                            <input type="number" placeholder='Inches' name="Push" id="height"/>
                        </label>
                        <div id="heightError"></div> 
                        <br></br>
                        <br></br>
                        <label style={{textAlign: "left"}}>
                            <span style={{color: 'white', fontSize: 28}}>Enter Weight</span>
                            <br></br>
                            <input type="number" placeholder='Pounds' name="Push" id="weight"/>
                        </label>
                        <div id="weightError"></div> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <span style={{color: 'white', fontSize: 40}}>---------------</span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <span style={{color: 'white', fontSize: 28}}>Calculated BMI:</span>
                        <br></br>
                        <br></br>
                        <span style={{color: 'white', fontSize: 66}} id="BMI"></span>
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