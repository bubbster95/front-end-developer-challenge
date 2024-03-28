import './skill-tree.scss';

import TitleBar from '../../containers/Title-Bar/title-bar'
import FullPath from '../../containers/Full-Path/full-path';
import PointWallet from '../../containers/Point-Wallet/point-wallet'

function SkillTreePage() {
  return (
    <div className="skill-tree-page">
      <div className='skill-tree-wrapper' style={{backgroundImage: 'url("assets/talent-calc-bg.png")'}}>
        <TitleBar></TitleBar>
        <FullPath path="1"></FullPath>
        <FullPath path="2"></FullPath>
        <PointWallet></PointWallet>
      </div>
    </div>
  );
}

export default SkillTreePage;
