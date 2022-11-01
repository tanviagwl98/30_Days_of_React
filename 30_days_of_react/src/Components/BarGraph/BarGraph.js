import React from 'react';

export default function BarGroup(props) {
    const data = props.data;
    //console.log("My data", data);
    // let barPadding = 2
    // let barColour = '#348AA7'
    // let widthScale = d => d * 10
    // let width = widthScale(data.population)
    // let yMid = props.barHeight * 0.5
    return (
        <div>
            {/* {data.map = (item, i) => {
                console.log('Data check', item);
                return (
                    <div>
                        <div>{country}</div>
                        {/* <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} /> */}
                        {/* <div>{population}</div>
                    </div>)
             */}
             {data.map(({country,population})=>{
                return (<div>
                    <div>{country}</div>
                    <div>{population}</div>
                </div>)
             })
             }
        </div>

    )}
