import React, { Component } from "react";
import { Divider } from 'antd';
import "./App.scss";

class ProjectPage extends Component {

  public render() {
    return (
      <div className="Page">
        <h2 className="projectTitle"><a href="https://github.com/swansonk14/typed-argument-parser"> Typed Argument Parser (Tap)</a></h2>
        <img className="projectImage" src="images/tap.png"></img>
        <br></br>
        <p className="projectText"> Tap is a modernization of Python's built-in <a href="https://docs.python.org/3/library/argparse.html">argparse</a> library for parsing command line arguments. By defining arguments in a typed Python class, Tap enables arguments with static type checking, code completion, and source code navigation. Tap can be installed with:</p>
        <pre>pip install typed-argument-parser</pre>
        <p>The <a href="https://github.com/swansonk14/typed-argument-parser">code</a> is open-source and was developed by Jesse Michel and myself.</p>

        <Divider />

        <h2 className="projectTitle"><a href="https://github.com/swansonk14/IntroML"> IntroML</a></h2>
        <img className="projectImage" src="images/nn.png"></img>
        <br></br>
        <p className="projectText"> IntroML is an introductory machine learning course that I developed and taught at Suleyman Demirel University in Almaty, Kazakhstan in January 2018 through MIT's <a href="http://misti.mit.edu/global-teaching-labs">Global Teaching Labs</a>. The material is based on the MIT class 6.036: Introduction to Machine Learning, which I took in spring 2016 with Professors Regina Barzilay, Tommi Jaakkola, and Suvrit Sra. The IntroML course consists of 11 lectures and programming labs, covering topics such as support vector machines, random forests, and neural networks. All the lecture notes, programming labs, and solutions are provided on the <a href="https://github.com/swansonk14/IntroML">IntroML GitHub page</a>.</p>

        <Divider />

        <h2 className="projectTitle"><a href="https://github.com/swansonk14/graphing_fleas"> Graphing Fleas</a></h2>
        <img className="projectImage" src="images/flea_adder.gif"></img>
        <br></br>
        <p className="projectText"> Graphing Fleas is a framework built in Python for simulating generalizations of <a href="https://en.wikipedia.org/wiki/Langton%27s_ant">Langton's Ant</a>, which is a two-dimensional Turing machine. Although the movement of the flea (or ant) on the grid is governed by simple rules, such as "turn right on white" and "turn left on black", complex patterns can emerge over time. Furthermore, certain rules enable the flea to perform computations on the grid. In the GIF above, the flea is takes the numbers 187<sub>10</sub> = 10111011<sub>2</sub> and 154<sub>10</sub> = 10011010<sub>2</sub> written in binary (black=1, white=0) in rows 2 and 3, and it writes the sum 341<sub>10</sub> = 101010101<sub>2</sub> in binary in (green=1, red=0) in the bottom row. This computation and several others &mdash; developed by Magdalen Dobson, Thomas Sturm, and myself &mdash; can be simulated using our open-source <a href="https://github.com/swansonk14/graphing_fleas"> code</a>.</p>
      </div>
    );
  }
}

export default ProjectPage;
