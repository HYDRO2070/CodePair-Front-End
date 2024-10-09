// import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "../CSS/CodeEditor.css"
// import { EditorState } from '@codemirror/state'
// import { EditorView, basicSetup } from 'codemirror'
// import { javascript } from '@codemirror/lang-javascript'
// import { oneDark } from '@codemirror/theme-one-dark'
// import { cpp } from '@codemirror/lang-cpp'
import Coding_editor from '../../components/JavaScript/Coding_editor'
// import { javascript } from '@codemirror/lang-javascript'
import { MdOutlineDelete } from "react-icons/md";

const CodeEditor = () => {
    const { id } = useParams();
    const [problem, setproblem] = useState(null)

    const [code, setcode] = useState('')

    // class TwoSum {
    //     public:
    //         // Method to find two indices
    //         std::vector<int> findTwoSum(const std::vector<int>& nums, int target) {
    //             std::unordered_map<int, int> numMap; // Map to store number and its index
    //             std::vector<int> result;

    //             for (int i = 0; i < nums.size(); ++i) {
    //                 int complement = target - nums[i];

    //                 // Check if complement exists in the map
    //                 if (numMap.find(complement) != numMap.end()) {
    //                     result.push_back(numMap[complement]); // First index
    //                     result.push_back(i); // Second index
    //                     return result; // Return the result
    //                 }

    //                 // Store the number and its index in the map
    //                 numMap[nums[i]] = i;
    //             }

    //             return result; // Return an empty vector if no solution found
    //         }
    //     };





    const [output, setoutput] = useState(null)
    // const [status, setstatus] = useState('waiting for result')
    const [error, seterror] = useState('')
    const [rloading, setrloading] = useState(false)
    const [sloading, setsloading] = useState(false)
    const [lang, setlang] = useState("cpp");
    const [langid, setlangid] = useState(54);
    const [isonline, setisonline] = useState(navigator.onLine);
    const [leftWidth, setLeftWidth] = useState(50); // percentage width of the left pane
    const [isOutputVisible, setIsOutputVisible] = useState(false);
    const [timetaken, settimetaken] = useState(0)
    const [spacetaken, setspacetaken] = useState(0)
    const [testpassed, settestpassed] = useState(-1)
    const [falidat, setfalidat] = useState('')
    // const [submiterror, setsubmiterror] = useState(false)

    const language = [
        { id: 54, name: 'c++' },
        { id: 71, name: 'python' },
        { id: 63, name: 'javaScript' },
    ];

    useEffect(() => {
        const fetchproblem = async () => {
            try {
                const res = await axios.get(`https://codepair-back-end.onrender.com/api/problem/${id}`)
                console.log(res.data)
                setproblem(res.data);
                setcode(res.data.defaultClass)
            } catch (error) {
                console.log("error fetching problem")
            }
        };
        fetchproblem();
        const token = localStorage.getItem('token');
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        console.log("token is", (jsonPayload))
    }, [id])


    useEffect(() => {
        const handleonline = () => setisonline(true);
        const handleoffine = () => setisonline(false);

        window.addEventListener('online', handleonline);
        window.addEventListener('offline', handleoffine);


        return () => {
            window.removeEventListener('online', handleonline);
            window.removeEventListener('offline', handleoffine);
        }


    }, [])



    const handleMouseDown = (e) => {
        e.preventDefault();
        const startX = e.clientX;

        const mouseMoveHandler = (e) => {
            const newWidth = leftWidth + ((startX - e.clientX) / window.innerWidth) * 100;
            setLeftWidth(Math.min(Math.max(newWidth, 20), 80)); // Restrict width between 20% and 80%
        };

        const mouseUpHandler = () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', mouseUpHandler);
        };

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', mouseUpHandler);
    };


    // const renderinput = (input) => {
    //     if (Array.isArray(input)) {
    //         return input.map((item, index) => <div key={index}>{JSON.stringify(item)}</div>);
    //     }
    //     else if (typeof input === 'object') {
    //         return (
    //             <div>
    //                 {Object.entries(input).map(([key, value], index) => {
    //                     return <div key={index}>
    //                         <strong>{key}:</strong> {JSON.stringify(value)}
    //                     </div>
    //                 })}
    //             </div>
    //         )
    //     }
    //     return <div>{input}</div>;
    // }
    // const renderoutput = (output) => {
    //     if (Array.isArray(output)) {
    //         return <div>{JSON.stringify(output)}</div>
    //     }
    //     else if (typeof output === 'object') {
    //         return <pre>{JSON.stringify(output, null, 2)}</pre>;
    //     }
    //     return <div>{JSON.stringify(output)}</div>;
    // }



    // const renderexample = (example) => {
    //     // if(example.input && example.output){
    //     return (
    //         <div className="pro-example">

    //         </div>
    //     )

    // }


    // const checkresult = async(token)=>{
    //     const resultresponse = await fetch(`http://localhost:3030/result/${token}`)
    //     const result = await resultresponse.json();

    //     if(result.stdout || result.stderr){
    //         if(result.stdout){
    //             setoutput(atob(result.stdout));
    //         }
    //         else{
    //             setoutput(result.stderr);
    //         }
    //     }
    //     else{
    //         setstatus(result.status);
    //         setTimeout(() => {
    //             checkresult(token)
    //         }, 2000);
    //     }
    // }



    const handlecoderun = async () => {
        try {
            //     const response = await axios.post('http://localhost:3030/run-code',{
            //         code:code,
            //         language: 54,
            //     });

            //     const result = response.data;
            //     console.log(result)
            //     if(result.stderr){
            //         setoutput(`Error : ${result.stderr}`);
            //     }
            //     else{
            //         setoutput(result.stdout);
            //     }
            // } catch(error){
            //     setoutput('Error executing the code');
            //     console.error(error);
            // }
            setrloading(true);
            seterror('');
            setoutput('');
            // setoutput('loading.....')
            // const response = await fetch('http://localhost:3030/run-code',{
            //     method:'POST',
            //     // headers:{

            //     // }
            //     body: JSON.stringify({
            //         code:code,
            //         language:74,
            //     }),
            // });
            const response = await axios.post('https://codepair-back-end.onrender.com/api/run-code', {
                code: code,
                language: langid,
                bottom: problem.defaultBottom,
                test_case: problem.testCases[0].input,
            });
            // console.log(response.data)
            // const token = response.data.token;
            // checkresult(token)
            if (response.data.output) {
                setoutput(response.data.output);
            }
            else if (response.data.error) {
                seterror(response.data.error)
            }
        } catch (error) {
            // setoutput('Error executing the code');
            seterror("Something went wrong!")
            // console.error(error);
        }
        finally {
            setrloading(false);
        }

    }



    const saveProblem = async (username, problemTitle) => {
        try {

            const t = localStorage.getItem('token');
            let a = ''
        if (t) {
            const base64Url = t.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => 
                '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            ).join(''));
            
            // Assuming the JSON payload is an object
            const payload = JSON.parse(jsonPayload);
            a = (payload.username); 
        }

            const problemTitle = problem.title;
            const username = a;
            const difficulty  = problem.difficulty;
            

            const response = await fetch('https://codepair-back-end.onrender.com/api/saveproblem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, problemTitle,difficulty  }),
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log(data.message); // Success message
            } else {
                console.error(data.message); // Error message
            }
        } catch (error) {
            console.error('Error saving problem:', error);
        }
    };



    const handlesubmit = async () => {
        try {
            setsloading(true);
            seterror('');
            setoutput('');

            const response = await axios.post('https://codepair-back-end.onrender.com/api/submission', {
                code: code,
                language: langid,
                // test_case: problem.testCases,
                bottom: problem.defaultBottom,
                test_case: problem.testCases,
            });

            const { testpass, time, memory, input_string, error } = response.data;
            console.log(6666)
            settimetaken(time)
            setspacetaken(memory)
            setfalidat(input_string)
            seterror(error)
            settestpassed(testpass)
            if (testpass && time && memory) {

            // try {
            //     const response = await axios.post('http://localhost:3030/saveproblem', problem);
            // } catch (error) {
            //     console.log('Error during sign up: ', error.response.data);
            // }
            // }
            setIsOutputVisible(true);
            saveProblem();
            }
            // if (response.data.output) {
            //     setIsOutputVisible(true)
            //     setoutput(response.data.output);
            // }
            // else if (response.data.error) {
            //     seterror(response.data.error)
            // }


        } catch (error) {
            // setoutput('Error executing the code');
            console.log(error)
            seterror("Something went wrong!")
            // console.error(error);
        }
        finally {
            setsloading(false);
        }
    }


    // #include<iostream>
    // using namespace std;
    // int main(){
    // cout<<"i am alive"<<endl;
    // return 0;
    // }


    const handleLanguagechange = (e, b) => {
        const slang = language.find(lang => lang.id === parseInt(e.target.value));
        // if(slang.name === 'c++'){
        //     setcode(b);
        // }
        // else{
        //     setcode('//Write your code here')
        // }
        setcode('')
        setlang(slang.name);
        setlangid(slang.id);
    }

    const isBase64 = (str) => {
        // Check if the string is likely Base64 encoded
        return /^[A-Za-z0-9+/]+={0,2}$/.test(str);
    };

    const handledelete = () => {
        setoutput('')
        seterror('')
    }
    const toggleWindow = () => {
        setIsOutputVisible(!isOutputVisible)
    };


    return (<>

        {
            (!problem ? <div>Loading.......</div> : (
                <div className='main-prob-page'>
                    <div className="prob-page-left" style={{ width: `${leftWidth}vw` }}>
                        <div className="prob-description">
                            <div className="prob-description-title"><h2>{problem.title}</h2></div>
                            <div className="prob-description-dif">
                                <p>{problem.difficulty}</p>
                                <p>Topics</p>
                                <p>Companies</p>
                                <p>Hint</p>
                            </div>
                            <div className="prob-description-des"><p>{problem.description}</p></div>
                            <div className="prob-description-des"><p>{problem.description}</p></div>
                        </div>

                        <div className="prob-example">
                            {/* <h3>Example</h3> */}
                            {problem.examples.map((ex, index) => (
                                <div key={index} className='prob-ex-num'>
                                    <h4>Example {index + 1}:</h4>
                                    <div className="prob-ex-des">
                                        <p><span className='bold'>Input:</span> {(ex.input)}</p>
                                        <p><span className='bold'>Output:</span>  {(ex.output)}</p>
                                        <p><span className='bold'>Explanation:</span>  {ex.explanation}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="prob-const">
                            <h4>Constraints:</h4>
                            <ul>
                                <li>2 {'<='} nums.length {'<='} 10</li>
                                <li>-10 {'<='} nums[i] {'<='} 10</li>
                                <li>-10 {'<='} target {'<='} 10</li>
                                <li>Only one valid answer exists.</li>
                            </ul>
                        </div>
                        <div className="prob-bottom">
                            <div className="cen-line"><div className="line"></div></div>
                            <div className="prob-bottom-ratio">
                                <p>Accepted <strong>{problem.totalSolved}</strong></p>
                                <p>Submission <strong>{problem.totalSubmissions}</strong></p>
                                <p>Acceptance Rate <strong>{problem.totalSolved / problem.totalSubmissions}</strong></p>
                            </div>
                            <div className="cen-line"><div className="line"></div></div>
                            <div className="prob-bottom-tag">
                                <select name="" id="">
                                    <option value="" disabled selected hidden>Tags</option>
                                    <option value="" disabled>
                                        <div className='tags-flex'>

                                            {problem.tags.map(item => {
                                                return (
                                                    <p>{item} </p>
                                                )
                                            })}
                                        </div>
                                    </option>
                                </select>
                            </div>
                            <div className="cen-line"><div className="line"></div></div>
                            <div className="prob-bottom-hint">
                                <select name="" id="">
                                    <option value="" disabled selected hidden>Hints</option>
                                    <option value="" disabled>Do it by user self....</option>
                                </select>
                            </div>
                            <div className="cen-line"><div className="line"></div></div>
                            <div className="prob-bottom-disc">
                                discussion here(Coming soon...)
                            </div>

                        </div>

                    </div>
                    {/* <div className="divider" onMouseDown={handleMouseDown}></div> */}
                    <div className="prob-page-right" style={{ width: `${100 - leftWidth}vw` }}>
                        <div className='code-lang-select'>
                            <select onChange={(e) => handleLanguagechange(e, problem.defaultClass)} value={langid}>
                                {language.map(l => (
                                    <option key={l.id} value={l.id}>
                                        {l.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="code-editor">
                            <Coding_editor code={code} setcode={setcode} lang={lang} langid={langid} />
                        </div>

                        <div className="code-submission">
                            <div className="button-group">
                                {/* disabled={!isonline} */}
                                <button disabled={!isonline || sloading} onClick={handlecoderun}>
                                    {rloading ? 'Loading...' : 'Run Code'}
                                </button>
                                <button disabled={!isonline || rloading} onClick={handlesubmit}>{sloading ? 'Loading...' : 'Submit'}</button>
                            </div>

                            {!isonline && <p className="internet-warning">Please connect to the internet...</p>}

                            <div className="pro-output">
                                {(output || error) && <div onClick={handledelete} className="output-dele"><MdOutlineDelete /></div>}
                                <h4>{(output || error) ? ((output) ? (<span className='submit-green'>Output:</span>) : (<span className='submit-red'>Output:</span>)) : ((testpassed != -1 || falidat) ? (<span className='submit-red'>Output:</span>) : '')}</h4>
                                {output && <pre>Input: {problem.examples[0].input}</pre>}
                                {output && <pre>Expected Output: {problem.examples[0].output}</pre>}
                                {output && <pre>Result: {isBase64(output) ? atob(output) : output}</pre>}
                                {error && <pre>Error: {isBase64(error) ? atob(error) : error}</pre>}

                                {falidat && (<div>
                                    <pre>Testpassed: {testpassed}</pre>
                                    <pre>Input: {falidat}</pre></div>)}
                            </div>
                        </div>
                    </div>

                    {isOutputVisible && (
                        <div className="sliding-window">
                            <div className="sliding-window-content">
                                <h2 className='submit-green'>Submit Successfully</h2>

                                <pre>
                                    Test Case Passed: {testpassed}
                                    <br />
                                    Time: {timetaken}
                                    <br />
                                    Space: {spacetaken}
                                    <br />
                                    Complexity: O(logn)
                                </pre>
                                <div className="prob-sub-butt">

                                    <button onClick={toggleWindow}>Close</button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            ))}


    </>)
}

export default CodeEditor