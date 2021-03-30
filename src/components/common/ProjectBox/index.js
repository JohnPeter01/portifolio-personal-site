import React from 'react';
import { Grid } from '../../layout/Grid';
import Highlight from '../../layout/Highlight';
import SectionTitle from '../SectionTitle';
import { WrapperProjects } from './styles';
import Card from '../../layout/Card';

const ProjectBox = () => (
  <Grid.Container>
    <SectionTitle title="Projetos" />
    <WrapperProjects>
      <Grid.Row>
        <Highlight
          alt="pomodoro Clock"
          description="Relógio pomodoro com React e typescript"
          title="Relógio Pomodoro"
          url="https://raw.githubusercontent.com/Eletromaximus/PomodoroClock/master/pomodoro.png"
          href="https://github.com/Eletromaximus/PomodoroClock"
        />
      </Grid.Row>

      <Grid.Row>
        <Card
          url="https://github.com/Eletromaximus/semanaomnistack11/blob/master/x2.png?raw=true"
          title="Semana Omnistack 11"
          alt="semana omnistack 11"
          href="https://github.com/Eletromaximus/semanaomnistack11"
        />
        <Card
          url="https://github.com/Eletromaximus/NLW3/blob/master/x.png?raw=true"
          title="Next Level Week 3"
          alt="next level week 3"
          href="https://github.com/Eletromaximus/NLW3"
        />
        <Card
          url="https://github.com/Eletromaximus/InstaAlura/raw/main/instaAlura.png"
          title="InstaAlura"
          alt="instaAlura"
          href="https://github.com/Eletromaximus/InstaAlura"
        />
      </Grid.Row>
    </WrapperProjects>
  </Grid.Container>
);

export default ProjectBox;
