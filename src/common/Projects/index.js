import React from 'react';
import { Clock } from "./Clock";
import { Links, Link, Button } from "./styled";

const Projects = () => (
  <Links>
    <Clock />
    <Link href="#"><Button>DE</Button></Link>
    <Link href="#"><Button>ES</Button></Link>
    <Link href="#"><Button>RU</Button></Link>
    <Link href="#"><Button>PL</Button></Link>
    <Link href="#"><Button>UA</Button></Link>
    <Link href="#"><Button teal>🌓</Button></Link>
  </Links>
)

export default Projects;