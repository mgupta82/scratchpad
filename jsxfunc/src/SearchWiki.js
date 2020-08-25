import React,{useState,useEffect} from 'react';
import axios from 'axios';

const SearchWiki = (props) => {
    const [term,setTerm] = useState('');
    const [results,setResults] = useState([]);

    const renderedResults = results.map((result)=>{
        return (
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}/>
                </div>
            </div>
        )
    })

    useEffect(() => {
        console.log("Searching...");

        const wiki = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                //?action=opensearch&format=json&formatversion=2&search=programming&namespace=0&limit=10
                    params: {
                        action: 'query',
                        list : 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                }
            );
            setResults(data.query.search);
        };
        if(term) {
            wiki();
        }
        
    }, [term]) //only fire if  term is changes else recursively will be fired when search results are updated

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term}
                    onChange={e => setTerm(e.target.value)}
                    className="input"/>
                </div>
                {renderedResults}
            </div>
        </div>
    );
};

export default SearchWiki;