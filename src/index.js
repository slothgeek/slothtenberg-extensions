import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

import './style.scss';

const blockList = [
	'core/buttons',
	'core/group',
	'core/image',
	'core/cover',
	'core/columns',
	'core/site-logo',
	'core/paragraph',
	'core/heading'
];


const addAttributes = (settings) => {


	if(blockList.indexOf(settings.name) == -1)
		return settings;

	if (typeof settings.attributes !== "undefined") {
		settings.attributes = Object.assign(settings.attributes, {
			hideOnDesktop: {
				type: "boolean",
				default: false,
			},
			hideOnTablet: {
				type: "boolean",
				default: false,
			},
			hideOnMobile: {
				type: "boolean",
				default: false,
			},
			hideOnLogIn: {
				type: "boolean",
				default: false,
			},
			hideOnLogOut: {
				type: "boolean",
				default: false,
			},
		});
	}

	return settings;
};

const withInspectorControl = createHigherOrderComponent((BlockEdit) => {
	return (props) => {

		const { attributes, name } = props;

		if(blockList.indexOf(name) == -1)
			return (
				<>
					<BlockEdit {...props} />
				</>
			);

		const { hideOnDesktop, hideOnTablet, hideOnMobile, hideOnLogIn, hideOnLogOut } = attributes;

		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody
						title={__("Visibility", "block-visibility")}
					>
						<ToggleControl
							checked={hideOnDesktop}
							label={__("Hide on desktop", "block-visibility")}
							onChange={() =>
								props.setAttributes({ hideOnDesktop: !hideOnDesktop })
							}
						/>
						<ToggleControl
							checked={hideOnTablet}
							label={__("Hide on tablet", "block-visibility")}
							onChange={() =>
								props.setAttributes({ hideOnTablet: !hideOnTablet })
							}
						/>
						<ToggleControl
							checked={hideOnMobile}
							label={__("Hide on mobile", "block-visibility")}
							onChange={() =>
								props.setAttributes({ hideOnMobile: !hideOnMobile })
							}
						/>
						<ToggleControl
							checked={hideOnLogIn}
							label={__("Hide on login", "block-visibility")}
							onChange={() =>
								props.setAttributes({ hideOnLogIn: !hideOnLogIn })
							}
						/>
						<ToggleControl
							checked={hideOnLogOut}
							label={__("Hide on logout", "block-visibility")}
							onChange={() =>
								props.setAttributes({ hideOnLogOut: !hideOnLogOut })
							}
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, "withInspectorControl");

const addVisibilityClasses = (extraProps, blockType, attributes) => {
	const { hideOnDesktop, hideOnTablet, hideOnMobile, hideOnLogIn, hideOnLogOut } = attributes;

	if(blockList.indexOf(blockType.name) == -1)
		return extraProps;

	extraProps.className = classnames(extraProps.className, {
		"hide-on-desktop": hideOnDesktop,
		"hide-on-tablet": hideOnTablet,
		"hide-on-mobile": hideOnMobile,
		"hide-on-login": hideOnLogIn,
		"hide-on-logout": hideOnLogOut,
	});

	return extraProps;
};

const addVisibilityEditorClasses = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const { attributes, name } = props;

		if(blockList.indexOf(name) == -1)
			return <BlockListBlock { ...props } />;

		const { hideOnDesktop, hideOnTablet, hideOnMobile, hideOnLogIn, hideOnLogOut } = attributes;

		const visibilityClasses = classnames({
			"hide-on-desktop": hideOnDesktop,
			"hide-on-tablet": hideOnTablet,
			"hide-on-mobile": hideOnMobile,
			"hide-on-login": hideOnLogIn,
			"hide-on-logout": hideOnLogOut,
		});

		return <BlockListBlock { ...props } className={ visibilityClasses } />;
	};
}, 'withYourCustomBlockClass' );

addFilter(
	"blocks.registerBlockType",
	"block-visibility/add-attributes",
	addAttributes
);

addFilter(
	"editor.BlockEdit",
	"block-visibility/with-advance-controls",
	withInspectorControl
);

addFilter(
	"blocks.getSaveContent.extraProps",
	"block-visibility/add-visibility-classes",
	addVisibilityClasses
);

addFilter(
	'editor.BlockListBlock',
	"block-visibility/add-visibility-editor-classes",
	addVisibilityEditorClasses
);
