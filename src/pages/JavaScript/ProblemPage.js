import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Calendarr from '../../components/JavaScript/Calendarr';
import "../CSS/ProblemPage.css"
import { Link } from 'react-router-dom';

const Problems = () => {
    const [problems, setproblems] = useState([])
    const [error, seterror] = useState('')
    let color = false;



    useEffect(() => {

        const fetching = async () => {
            try {
                let pros = await axios.get('https://codepair-back-end.onrender.com/api/problemset')
                // let res = pros.json();
                console.log(pros.data)
                setproblems(pros.data)
            } catch (err) {
                seterror('Error etching data or unauthorized');
            }
        }

        fetching()
    }, [])


    if (error) {
        return <div>{error}</div>;
    }


    // const handleclick = (e)=>{
    //     console.log(e.target.value)
    // }

    return (
        <>



            {
                (problems.length < 1) ? (<div>Loading.......

                </div>) : (<div className='prob-main'>

                    <div className="prob-left">
                        {/* <h1>Problems</h1> */}
                        <div className="prob-filter-sys">
                            <div className="all-problem">
                                <select name="" id="">
                                    <option value="" disabled selected hidden>List</option>
                                    <option value="">Top 100 list</option>
                                    <option value="">Top 200 list</option>
                                    <option value="">Top 300 list</option>
                                    <option value="">Top 400 list</option>
                                </select>
                            </div>
                            <div className="prob-filter-dif">
                                <select name="" id="">
                                <option value="" disabled selected hidden>Difficulty</option>
                                    <option value="">Easy</option>
                                    <option value="">Medium</option>
                                    <option value="">Hard</option>
                                </select>
                            </div>
                            <div className="prob-filter-status">
                                <select name="" id="">
                                <option value="" disabled selected hidden>Status</option>
                                    <option value="">Todo</option>
                                    <option value="">Solved</option>
                                    <option value="">Attempted</option>
                                </select>
                            </div>
                            <div className="prob-filter-tag">
                                <select name="" id="">
                                <option value="" disabled selected hidden>Tag</option>
                                    <option value="">Array</option>
                                    <option value="">String</option>
                                    <option value="">DP</option>
                                    <option value="">Graph</option>
                                    <option value="">Tree</option>
                                </select>
                            </div>
                        </div>

                        {/* <table>
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Title</th>
                                    <th>Difficulty</th>
                                    <th>Solve</th>
                                </tr>
                            </thead>
                            <tbody>
                                {problems.map((problems) => (
                                    <tr key={problems._id}>
                                        <td></td>
                                        <td>{a = a + 1}. {problems.title}</td>
                                        <td className={(problems.difficulty === "Easy")?("green"):((problems.difficulty === "Medium")?("yellow") : "red")}>{problems.difficulty}</td>
                                        <td><button>Solve</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> */}
                        <div className="pro-table">
                                <div className="pro-table-h">
                                    <div className="pro-table-h-1">
                                    Status
                                    </div>
                                    <div className="pro-table-h-2">
                                    Title
                                    </div>
                                    <div className="pro-table-h-3">
                                    Acceptance
                                    </div>
                                    <div className="pro-table-h-4">
                                    Difficulty
                                    </div>
                                    <div className="pro-table-h-5">
                                    Solve
                                    </div>
                                </div>
                                <div className="cen-line">

                                <div className='line'></div>
                                </div>
                                <div className="pro-table-r">
                                {problems.map((problems) => (
                                    <div key={problems._id} className={`pro-table-r-1 ${(color)?"grey":""} ${(color?(color = false):color = true)}`}>
                                        <div className="pro-table-sta"><p></p></div>
                                        <div className="pro-table-title"><Link to={`/problemset/${problems._id}`}><p>{problems.title}</p></Link></div>
                                        <div className="prob-table-accept">{problems.totalSubmissions / problems.totalSolved}%</div>
                                        <div className='pro-table-dif'><p className={(problems.difficulty === "easy")?("green"):((problems.difficulty === "medium")?("yellow") : "red")} >{problems.difficulty}</p></div>
                                        <div className="pro-table-solv"><button>Solve</button></div>
                                    </div>
                                ))}
                                </div>
                        </div>
                    </div>
                    <div className="prob-right">
                        <Calendarr />
                    </div>

                </div>)
            }
        </>
    )
}

export default Problems