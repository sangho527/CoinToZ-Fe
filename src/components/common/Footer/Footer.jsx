import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import logo from '../../../assets/appBar/logo.png';
import styled from 'styled-components';
import { css } from 'styled-components';

const container = css`
	max-width: 1400px;
	width: 100%;
	display: flex;
	margin: 30px auto;
`;

const FooterComponent = styled.footer`
	width: 100%;
	height: 130px;
	display: flex;
	justify-content: center;
	background: #D9D0F6;
	.content {
		${container}
		display: flex;
		align-items: center;
		justify-content: space-between;
		.rep {
			display: flex;
			align-items: center;
			> div {
				:nth-child(1) {
					padding: 0 0.5rem;
				}
			}
		}
		a {
			display: flex;
			justify-content: center;
			padding: 0.125rem 0.125rem;
			align-items: center;
			text-decoration: none;
			margin: 0.125rem 0.25rem;
			color: #333;
			:active,
			:link,
			:visited {
				color: #333;
			}
		}
		img {
			width: 115px;
			height: 80px;
		}
		> div {
			:nth-child(1) {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			> div {
				margin: 0.5rem 0;
			}
		}
	}
`;

function Footer() {

  const FOOTER_LIST = {
    repository1: 'https://gitlab.com/people-of-development1/financial-final-project-be',
    repository2: 'https://gitlab.com/people-of-development1/financial-final-project-fe',
    copyright: 'CoinToZ © 2023 All rights reserved.',
    be1: [
      { name: '강동연', repository: 'https://github.com/dongyeon-0822' },
      { name: '강수빈', repository: 'https://github.com/kang-subin' },
      { name: '김상호', repository: 'https://github.com/sangho527' },
    ],
    be2: [
      { name: '손세열', repository: 'https://github.com/ccodding' },
      { name: '오형상', repository: 'https://github.com/ohy1023' },
      { name: '임학준', repository: 'https://github.com/hakjun1' },
    ],
  };
  const navigate = useNavigate();

  return (
    <FooterComponent>
      <div className="content">
        <div>
          <img src={logo} onClick={() => navigate('/')} alt=""/>
          <a href={FOOTER_LIST.repository1} target="_blank" rel="noreferrer">
            BackEnd GitLab Repository
          </a>
          <a href={FOOTER_LIST.repository2} target="_blank" rel="noreferrer">
            FrontEnd GitLab Repository
          </a>
        </div>
        <div>{FOOTER_LIST.copyright}</div>
        <div>
          <div className="rep">
            <div>BE</div>
            {FOOTER_LIST.be1.map((v, i) => (
              <a href={v.repository} key={i} target="_blank" rel="noreferrer">
                <div>
                  <AiFillGithub />
                </div>
                <div>{v.name}</div>
              </a>
            ))}
          </div>
          <div className="rep">
            <div>BE</div>
            {FOOTER_LIST.be2.map((v, i) => (
              <a href={v.repository} key={i} target="_blank" rel="noreferrer">
                <div>
                  <AiFillGithub />
                </div>
                <div>{v.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </FooterComponent>
  );
}

export default Footer;