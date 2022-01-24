import React from 'react';
import { Clock } from "./Clock";
import { Links, Link, Button } from "./styled";

const Projects = () => (
  <Links>
    <Clock />
    <Link href="ToDo-List--DE-CRMS--ReactApp"><Button>DE</Button></Link>
    <Link href="ToDo-List--ES-CRMS--ReactApp"><Button>ES</Button></Link>
    <Link href="ToDo-List--RU-CRMS--ReactApp"><Button>RU</Button></Link>
    <Link href="ToDo-List--PL-CRMS--ReactApp"><Button>PL</Button></Link>
    <Link href="ToDo-List--UA-CRMS--ReactApp"><Button>UA</Button></Link>
    <Link href="#"><Button deepSkyBlue>🌓</Button></Link>
  </Links>
)

export default Projects;