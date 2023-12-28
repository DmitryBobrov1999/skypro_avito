import { NavLink } from 'react-router-dom';
import * as S from './Footer.styles';

export const Footer = ({ setActiveAddAd }) => {
	return (
		<S.MainPageFooter>
			<S.MainPageFooterContainer>
				<NavLink to='/'>
					<S.MainPageFooterImgDiv>
						<svg
							width='30'
							height='25'
							viewBox='0 0 30 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M4.3584 15.1559V15.1591L4.3584 20.2324C4.3584 22.3527 6.08259 24.0769 8.19968 24.0769H22.0289C24.146 24.0769 25.8702 22.3527 25.8702 20.2324V15'
								stroke='#009EE4'
							/>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M16.6549 1.61657L28.5338 11.4153L28.5867 11.4633C29.4485 12.3251 29.4409 13.719 28.5882 14.5766L28.5867 14.5781C27.7371 15.4277 26.365 15.4379 25.5029 14.6085L15.1158 6.21083L4.72875 14.6085C3.86665 15.4379 2.49456 15.4277 1.64492 14.5781C0.785028 13.7182 0.785028 12.3232 1.64492 11.4633C1.66174 11.4465 1.67935 11.4305 1.6977 11.4153L13.5749 1.61542C14.0075 1.20153 14.5636 1.00083 15.1126 1.00006C15.6689 0.99608 16.2268 1.20331 16.6549 1.61657Z'
								stroke='#009EE4'
								strokeLinejoin='round'
							/>
							<path
								d='M9.59591 5V3.28925C9.59591 2.0781 8.61205 1.09424 7.4009 1.09424H6.55341C5.34226 1.09424 4.3584 2.0781 4.3584 3.28925V9'
								stroke='#009EE4'
							/>
							<path
								d='M11.4207 23.5865V17.7873C11.4207 16.378 12.5669 15.2318 13.9761 15.2318H16.2555C17.6648 15.2318 18.811 16.378 18.811 17.7873V23.5865'
								stroke='#009EE4'
							/>
						</svg>
					</S.MainPageFooterImgDiv>
				</NavLink>

				<S.MainPageFooterImgDiv onClick={() => setActiveAddAd(true)}>
					<svg
						width='42'
						height='42'
						viewBox='0 0 42 42'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='21' cy='21' r='20.5' stroke='#009EE4' />
						<path
							d='M20.4751 11.55V29.4001'
							stroke='#009EE4'
							strokeLinecap='round'
						/>
						<path
							d='M29.4001 20.475L11.5501 20.475'
							stroke='#009EE4'
							strokeLinecap='round'
						/>
					</svg>
				</S.MainPageFooterImgDiv>

				<NavLink to='/profile'>
					<S.MainPageFooterImgDiv>
						<svg
							width='28'
							height='27'
							viewBox='0 0 28 27'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='14' cy='13.5' r='13' stroke='#009EE4' />
							<path
								d='M4.66089 22.6607C5.73135 18.5017 9.50677 15.4286 14 15.4286C18.4089 15.4286 22.1268 18.3876 23.276 22.428'
								stroke='#009EE4'
							/>
							<circle cx='13.9999' cy='8.67854' r='4.32143' stroke='#009EE4' />
						</svg>
					</S.MainPageFooterImgDiv>
				</NavLink>
			</S.MainPageFooterContainer>
		</S.MainPageFooter>
	);
};