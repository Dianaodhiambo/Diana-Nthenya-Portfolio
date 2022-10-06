import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function Portfolio() {
  const [repoData, setRepoData] = useState();

  async function repoDataURL() {
    //Get repo data about github user
    await fetch("https://api.github.com/users/Dianaodhiambo/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.slice(0, 5).map((item) => (
            <div className="text-center">
              
                {item.name}
              
            </div>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetch("https://api.github.com/users/Dianaodhiambo")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div className="Portfolio" id='Portfolio'>
        <div className='Projects'>
            <span>My Recent </span>
            <span>Projects. <br/> </span>
            <span>
                Here is a list of the most recent
                <br/>
                code written by me.<br/>
            </span>
            <span>
                <Button className='button s-button' onClick={repoDataURL}>
                    My Public Repos!
                </Button>
            </span>
        
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            {repoData}
           </div>
    </div>
  );
}

export default Portfolio;
