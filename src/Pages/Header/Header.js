import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { userSelectedA } from '../../Reducers/Action';
import { isIndex } from '../../Reducers/Action';
import Fade from 'react-reveal/Fade';
import './header.css'
function Header(props) {
    const storeAnswer = useSelector(state => state.storeAnswer);
    const stateIndex = useSelector(state => state.index);
    console.log('You can store Answer from here', stateIndex)
    const dispatch = useDispatch();
    const [show, setShow] = useState(null);
    const [pageId, setPageId] = useState([]);
    const [count, setCount] = useState(1);
    const setActive = (index) => {
        setShow(index);
    }
    useEffect(() => {
        const page = props.state.Questions.filter(x => x.id === count);
        setPageId(page);
    }, [show]);
    const goToNextQuestion = () => {
        if (count < 4) {
            const nextQuestion = props.state.Questions.filter(n => n.id === count);
            dispatch(isIndex({ 'SltAns': show, 'Que': count, 'Question': nextQuestion }));
            // dispatch(userSelectedA());
            if (stateIndex.length !== 0 && stateIndex.length > count) {
                const retObj = stateIndex.find(i => i.Que === (count + 1));
                const nIndex = retObj.SltAns
                setShow(nIndex);
            } else {
                setShow(null)
            }
            if (nextQuestion && nextQuestion.length !== 0) {
                setPageId(nextQuestion);
                setCount(count + 1);
            } else {
                alert('You have all Done!')
            }

        }
        else{
            alert('Enough for the time being :)')
        }


    }
    const goToPreviousQuestion = () => {

        const PQc = count - 1; // previous question count
        if (PQc >= 1) {
            const preQue = props.state.Questions.filter(p => p.id === PQc);
            setPageId(preQue);
            setShow(stateIndex[PQc - 1].SltAns);
            setCount(count - 1);
        }

    }
    const ViewNextSelected = () => {
        const NQc = count + 1; // next question count
        if (stateIndex.length !== 0 && stateIndex.length >= count) {
            const nextSltQue = props.state.Questions.filter(n => n.id === NQc); // next selected question
            setCount(NQc);
            setPageId(nextSltQue);
            if (stateIndex[NQc - 1] !== undefined) {
                setShow(stateIndex[NQc - 1].SltAns)
            } else {
                setShow(null)
            }
        }

    }
    return (
        <React.Fragment>
            <div className="App">
                <Grid container>
                    <Grid item xs={6}>
                        <Main>
                            <div><img src='https://valrhona-survey-main.vercel.app/_next/image?url=%2Fassets%2Flogos%2Fsigmads.png&w=256&q=100' alt="logo" className='logo' /></div>
                            <Wrapper >
                                <div className='text-typography'>
                                    {count} 0f<span className='text-red'> 35</span>
                                </div>
                                <div>
                                    <svg onClick={goToPreviousQuestion} xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 16l-4-4m0 0l4-4m-4 4h18" ></path></svg>
                                    <svg onClick={ViewNextSelected} xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </Wrapper>
                        </Main>

                        {pageId.map((item) => {
                            return (
                                <React.Fragment key={item.id}>

                                    <Container>
                                        <div className='sourcing'>Sourcing</div>
                                        <Fade right>
                                            <h4 className='description-text'>{item.heading}</h4>
                                        </Fade>
                                    </Container>
                                    <Menu>
                                        <h1 className="heading-text" >{item.question}</h1>
                                        <div className={"ques-heading " + (show === 1 ? 'show' : '')} onClick={() => setActive(1)}>
                                            <div className='ques-wrapper'>
                                                <p>{item.options.firstDDy}</p>
                                                <span>{item.options.firstDDs}</span>
                                            </div>
                                            <div className='svg-container'>
                                                {show === 1 ?
                                                    <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 hidden sm:block"><circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2"></circle><path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    : null}
                                            </div>
                                        </div>
                                        <div className={"ques-heading " + (show === 2 ? 'show' : '')} onClick={() => setActive(2)}>
                                            <div className='ques-wrapper'>
                                                <p>{item.options.secondDDy} </p>
                                                <span>{item.options.secondDDs} </span>
                                            </div>
                                            <div className='svg-container '>
                                                {show === 2 ?
                                                    <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 hidden sm:block"><circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2"></circle><path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    : null}
                                            </div>
                                        </div>
                                        <div className={"ques-heading " + (show === 3 ? 'show' : '')} onClick={() => setActive(3)}>
                                            <div className='ques-wrapper'>
                                                <p>{item.options.thirdDDy} </p>
                                                <span> {item.options.thirdDDs} </span>
                                            </div>
                                            <div className='svg-container'>
                                                {show === 3 ?
                                                    <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 hidden sm:block"><circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2"></circle><path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    : null}
                                            </div>
                                        </div>
                                        <div className={"ques-heading " + (show === 4 ? 'show' : '')} onClick={() => setActive(4)}>
                                            <div className='ques-wrapper'>
                                                <p>{item.options.fourthDDy} </p>
                                                <span><div>{item.options.fourthDDs} </div> </span>
                                            </div>
                                            <div className='svg-container'>
                                                {show === 4 ?
                                                    <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 hidden sm:block"><circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2"></circle><path d="M7 13l3 3 7-7" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    : null}
                                            </div>
                                        </div>
                                        <Button>
                                            {show ?

                                                <div className='btn-cnt'>
                                                    <button className='red-button' onClick={() => goToNextQuestion(2)}><p>Next</p></button>
                                                </div> : null}
                                        </Button>
                                    </Menu>
                                </React.Fragment>
                            )
                        })}
                    </Grid>
                    {pageId.map((i) => (
                        <Grid item xs={6}>
                            <div className='bg-img' style={{ background: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)) 0% 0% / cover no-repeat, url(${i.img})` }} >
                                <h2 className='img-text'>
                                    {i.imgText}
                                </h2>
                            </div>
                        </Grid>
                    ))}

                </Grid>
                <Footer>
                    <div className='footer-main'>
                        <div className="footer-heading">
                            <h4>Making tomorrow sweeter</h4>
                        </div>
                        <div className='ref-cont'>
                            <a href="mailto:testukforms2020@gmail.com">Contact Us</a>
                            <span class="hidden sm:flex">|</span>
                            <a href="https://www.google.com/" target="_blank">Data Protection</a>
                        </div>
                    </div>
                    <div className='footer-logo'>
                        <div>
                            <img src='https://valrhona-survey-main.vercel.app/_next/image?url=%2Fassets%2Flogos%2Fsigmads.png&w=256&q=100' alt="logo" className='logo' />
                        </div>
                        <div>
                            <img src='https://valrhona-survey-main.vercel.app/_next/image?url=%2Fassets%2Flogos%2Fsigmads.png&w=256&q=100' alt="logo" className='logo' />
                        </div>
                    </div>
                </Footer>
            </div>

        </React.Fragment>
    )
}

export default Header;
const Main = styled.div`
    display:flex;
    justify-content:space-between;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 26px;
`
const Container = styled.div`
   padding: 1rem 0.5rem;
   border-top:1px solid #b9924b;
   margin:0.5rem
`
const Menu = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const Button = styled.div`
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    justify-content: space-around;
    min-height: 40px;
    height:75px;
`
const Footer = styled.div`
    padding-top: 5rem;
    padding-bottom: 5rem;
    --tw-text-opacity: 1;
    color: rgba(255,255,255,var(--tw-text-opacity));
    padding-left: 1rem;
    padding-right: 1rem;
    --tw-bg-opacity: 1;
    background-color: rgba(0,0,0,var(--tw-bg-opacity));
    flex-shrink: 0;
    display:flex;
    flex-direction: row;
`
