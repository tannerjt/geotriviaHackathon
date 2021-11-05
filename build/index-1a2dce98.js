import { N as addUsersToGroup, g as getProp, u as includes, c as cloneObject, P as without, Q as getWithDefault, S as getHubProduct, T as getSubscriptionType, U as getCulture, V as convertToWellKnownLocale, W as fetchHubTranslation, X as emailOrgUsers, Y as autoAddUsers, Z as inviteUsers } from './index-b3f90185.js';
import { z as searchGroups, B as createGroup, C as protectGroup, D as getGroup, E as getGroupUsers, F as searchGroupUsers, G as searchGroupContent, b as addGroupUsers, f as updateItem, u as unprotectGroup, a as removeGroup, H as removeGroupUsers, I as updateGroup, J as updateUserMemberships } from './index-f26ee985.js';

/**
 * Enum of the types of teams that the teams service supports
 */
const TEAMTYPES = [
    "core",
    "content",
    "followers",
    "team",
    "event",
    "edit",
];

/**
 * Attempts to Add, Invite, or email users about joining
 * a team depending on the requesting user's permissions
 * (see addUsersToGroup in hub-common)
 *
 * @param {string} groupId
 * @param {IUser[]} usersToAdd
 * @param {IHubRequestOptions} primaryRO Info and authentication for the requesting user
 * @param {IEmail} [email] Email to be sent (if qualifying users are passed in)
 * @param {IHubRequestOptions} [secondaryRO] Info and authentication for emailing members of a secondary organization (typically a community org)
 *
 * @returns {IConsolidatedResult} The operations attempted, whether they were successful and any errors
 */
function addUsersToTeam(teamId, usersToAdd, primaryRO, email, secondaryRO) {
    return addUsersToGroup(teamId, usersToAdd, primaryRO, email, secondaryRO);
}

/**
 * Hash of the team group templates.
 * This hash is used to determin what teams can be created in what products
 * based on what privs and stored in what properties
 * We define the various groups via json structures. The .config hash controls
 * the i18n, as well as the portal vs ago, and basic vs premium definition.
 * This allows us to add/remove/edit groups by simply modifying this hash
 * instead of spreading complex construction logic all over the application
 */
const WELLKNOWNTEAMS = [
    {
        config: {
            groupType: "Hub Collaboration Group",
            type: "core",
            availableIn: ["premium"],
            propertyName: "collaborationGroupId",
            requiredPrivs: ["portal:admin:createUpdateCapableGroup"],
            titleI18n: "collaborationTitle",
            descriptionI18n: "collaborationDesc",
            snippetI18n: "collaborationSnippet",
            privPropValues: [
                {
                    priv: "portal:user:addExternalMembersToGroup",
                    prop: "membershipAccess",
                    value: "collaboration",
                },
            ],
        },
        access: "org",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        capabilities: "updateitemcontrol",
        membershipAccess: "org",
        _edit_privacy: "on",
        _edit_contributors: "on",
        tags: [
            "Hub Group",
            "Hub Initiative Group",
            "Hub Site Group",
            "Hub Core Team Group",
            "Hub Team Group",
        ],
    },
    {
        config: {
            groupType: "Hub Collaboration Group",
            type: "core",
            availableIn: ["basic"],
            propertyName: "collaborationGroupId",
            requiredPrivs: ["portal:admin:createUpdateCapableGroup"],
            titleI18n: "collaborationTitleBasic",
            descriptionI18n: "collaborationDescBasic",
            snippetI18n: "collaborationSnippetBasic",
            privPropValues: [
                {
                    priv: "portal:user:addExternalMembersToGroup",
                    prop: "membershipAccess",
                    value: "collaboration",
                },
            ],
        },
        access: "org",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        capabilities: "updateitemcontrol",
        membershipAccess: "org",
        _edit_privacy: "on",
        _edit_contributors: "on",
        tags: [
            "Hub Group",
            "Hub Site Group",
            "Hub Core Team Group",
            "Hub Team Group",
        ],
    },
    {
        config: {
            groupType: "Portal Collaboration Group",
            type: "core",
            availableIn: ["portal"],
            propertyName: "collaborationGroupId",
            requiredPrivs: [
                "portal:user:createGroup",
                "portal:admin:createUpdateCapableGroup",
            ],
            titleI18n: "collaborationTitlePortal",
            descriptionI18n: "collaborationDescPortal",
            snippetI18n: "collaborationSnippetPortal",
        },
        access: "org",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        capabilities: "updateitemcontrol",
        _edit_privacy: "on",
        _edit_contributors: "on",
        tags: ["Sites Group", "Sites Core Team Group"],
    },
    {
        config: {
            groupType: "Hub Content Group",
            type: "content",
            availableIn: ["premium"],
            propertyName: "contentGroupId",
            requiredPrivs: ["portal:user:createGroup"],
            titleI18n: "contentTitle",
            descriptionI18n: "contentDesc",
            snippetI18n: "contentSnippet",
            privPropValues: [
                {
                    priv: "portal:user:addExternalMembersToGroup",
                    prop: "membershipAccess",
                    value: "",
                },
            ],
        },
        access: "public",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        membershipAccess: "org",
        tags: [
            "Hub Group",
            "Hub Content Group",
            "Hub Site Group",
            "Hub Initiative Group",
        ],
    },
    {
        config: {
            groupType: "Hub Content Group",
            type: "content",
            availableIn: ["basic"],
            propertyName: "contentGroupId",
            requiredPrivs: ["portal:user:createGroup"],
            titleI18n: "contentTitleBasic",
            descriptionI18n: "contentDescBasic",
            snippetI18n: "contentSnippetBasic",
            privPropValues: [
                {
                    priv: "portal:user:addExternalMembersToGroup",
                    prop: "membershipAccess",
                    value: "",
                },
            ],
        },
        access: "public",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        membershipAccess: "org",
        tags: ["Hub Group", "Hub Content Group", "Hub Site Group"],
    },
    {
        config: {
            groupType: "Portal Content Group",
            type: "content",
            availableIn: ["portal"],
            propertyName: "contentGroupId",
            requiredPrivs: ["portal:user:createGroup"],
            titleI18n: "contentTitle",
            descriptionI18n: "contentDescPortal",
            snippetI18n: "contentSnippetPortal",
        },
        access: "org",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        tags: ["Sites Group", "Sites Content Group"],
    },
    {
        // this is only ever created in AGO, so we don't have a second entry for followers
        config: {
            groupType: "Hub Followers Group",
            type: "followers",
            availableIn: ["premium"],
            propertyName: "followersGroupId",
            requiredPrivs: ["portal:user:createGroup"],
            titleI18n: "followersTitle",
            descriptionI18n: "followersDesc",
            snippetI18n: "followersSnippet",
            privPropValues: [
                {
                    priv: "portal:user:addExternalMembersToGroup",
                    prop: "membershipAccess",
                    value: "",
                },
            ],
        },
        access: "public",
        autoJoin: true,
        isInvitationOnly: false,
        isViewOnly: true,
        notificationsEnabled: true,
        sortField: "title",
        sortOrder: "asc",
        membershipAccess: "org",
        tags: [
            "Hub Group",
            "Hub Initiative Followers Group",
            "Hub Initiative Group",
        ],
    },
    {
        config: {
            groupType: "Generic AGO Site Team",
            type: "team",
            availableIn: ["basic"],
            requiredPrivs: ["portal:user:createGroup"],
            titleI18n: "teamTitle",
            descriptionI18n: "teamDesc",
            snippetI18n: "teamSnippet",
        },
        access: "org",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        tags: ["Site Team Group"],
    },
    {
        config: {
            groupType: "Generic AGO Initiative Team",
            type: "team",
            availableIn: ["premium"],
            requiredPrivs: [
                "portal:user:createGroup",
                "portal:user:addExternalMembersToGroup",
            ],
            titleI18n: "teamTitle",
            descriptionI18n: "teamDesc",
            snippetI18n: "teamSnippet",
        },
        access: "org",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        membershipAccess: "",
        tags: ["Hub Team Group"],
    },
    {
        config: {
            groupType: "Generic AGO Edit Supporting Team",
            type: "edit",
            availableIn: ["premium"],
            requiredPrivs: [
                "portal:user:createGroup",
                "portal:user:addExternalMembersToGroup",
            ],
            titleI18n: "teamTitle",
            descriptionI18n: "editTeamDesc",
            snippetI18n: "editTeamSnippet",
        },
        access: "org",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        capabilities: "updateitemcontrol",
        membershipAccess: "org",
        tags: ["Hub Team Group"],
        typekeyword: ["Hub Team", "Hub Edit Supporting Team"],
    },
    {
        config: {
            groupType: "Generic Portal Edit Supporting Team",
            type: "edit",
            availableIn: ["portal"],
            requiredPrivs: ["portal:user:createGroup"],
            titleI18n: "teamTitle",
            descriptionI18n: "editTeamDesc",
            snippetI18n: "editTeamSnippet",
        },
        access: "org",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        capabilities: "updateitemcontrol",
        membershipAccess: "org",
        tags: ["Site Team Group"],
        typekeyword: ["Site Team", "Site Edit Supporting Team"],
    },
    {
        config: {
            groupType: "Generic Portal Team",
            type: "team",
            availableIn: ["portal"],
            requiredPrivs: ["portal:user:createGroup"],
            titleI18n: "teamTitle",
            descriptionI18n: "teamDesc",
            snippetI18n: "teamSnippet",
        },
        access: "org",
        autoJoin: false,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "modified",
        sortOrder: "desc",
        tags: ["Site Team Group"],
    },
    {
        config: {
            groupType: "Generic Event Team",
            type: "event",
            availableIn: ["premium"],
            requiredPrivs: [
                "portal:user:createGroup",
                "portal:user:addExternalMembersToGroup",
            ],
            titleI18n: "eventTeamTitle",
            descriptionI18n: "eventTeamDesc",
            snippetI18n: "eventTeamSnippet",
        },
        access: "public",
        autoJoin: true,
        isInvitationOnly: false,
        isViewOnly: false,
        sortField: "title",
        sortOrder: "asc",
        membershipAccess: "",
        tags: ["Hub Group", "Hub Event Group", "Hub Initiative Group"],
    },
];

/**
 * Does a user have all the privileges in the passed in array
 * @param {current user from session} user
 * @param {array} privileges
 */
function hasAllPrivileges(user, privileges) {
    let result = false;
    // ensure we were passed an array...
    if (Array.isArray(privileges)) {
        result = privileges.every(priv => user.privileges.indexOf(priv) > -1);
    }
    return result;
}

/**
 * Predicate for filtering group templates based on product
 * and user privs required.
 * Param order is optimized for partial application
 * @param {object} user
 * @param {string} product basic, premium, portal
 * @param {object} template Team (group) template
 */
function canUserCreateTeamInProduct(user, product, template) {
    let result = false;
    const userGroups = getProp(user, "groups") || [];
    // can this be created in the current environment?
    if (userGroups.length < 507 &&
        includes(template.config.availableIn, product)) {
        // and user has required privs...
        result = hasAllPrivileges(user, template.config.requiredPrivs);
    }
    return result;
}

const ALLOWED_SUBSCRIPTION_TYPES = [
    "Demo & Marketing",
    "Demo and Marketing",
    "Organizational Plan",
    "Community",
    "In House",
    "ConnectED",
    "ELA",
    "Education Site License",
    "Education",
    "HUP Online",
];
/**
 * TODO: If/when AGO implements this logic or runs a script on their end we can remove
 * this logic, or simply return passed in user.
 * Returns a cloned copy of the user object with updated privileges
 * based on whether or not the user has a subscription type not in the
 * allowed list
 * @param {object} user
 * @param {string} subscriptionInfoType
 * @returns
 */
function removeInvalidPrivs(user, subscriptionInfoType) {
    // Clone User
    const clonedUser = cloneObject(user);
    // Get allowed list of sub types
    const allowedSubscriptionTypes = ALLOWED_SUBSCRIPTION_TYPES;
    // If portal self has a sub type OTHER than one of the allowed ones...
    if (!includes(allowedSubscriptionTypes, subscriptionInfoType)) {
        clonedUser.privileges = without(clonedUser.privileges, "portal:user:addExternalMembersToGroup");
    }
    return clonedUser;
}

/**
 * Updates template based upon new privPropValues property
 * In the templates config hash.
 * This allows us to conditionally change out parts of the template
 * @param {object} user
 * @param {object} template
 * @returns {object} Returns updated template
 */
function applyPrivPropValuesToTemplate(user, template) {
    const templateCopy = cloneObject(template);
    // Only two templates actually have this in config atm, so we want to be safe.
    const ppv = getWithDefault(template, "config.privPropValues", []);
    // iterate over privPropValues
    ppv.forEach((entry) => {
        // entry === each privPropValue obj { priv, prop, value}
        // If user privileges includes the privilege in privPropValue...
        if (includes(user.privileges, entry.priv)) {
            // update the group template with appropriate prop / value changes
            templateCopy[entry.prop] = entry.value; // for example updating the membershipAccess
        }
    });
    return templateCopy;
}

// TODO: Remove portalApiVersion at next breaking change
/**
 * Return array of group templates that the current user has licensing
 * and privs to create in the current environment (AGO vs Portal)
 * @param {object} user
 * @param {string} environment
 * @param {string} portalApiVersion
 * @param {string} subscriptionInfoType
 */
function getUserCreatableTeams(user, environment, portalApiVersion, // Depracated, remove at next breaking change
subscriptionInfoType = "") {
    /* tslint:disable no-console */
    console.warn("Hub.js::getUserCreatableTeams Deprecation warning portalApiVersion will be removed at v9.0.0");
    /* tslint:enable no-console */
    const teams = WELLKNOWNTEAMS;
    // Online is not properly respecting addExternalMembersToGroup for
    // certain subscription types known ones so far: Trial, personal use, developer, and evaluation
    const updatedUser = removeInvalidPrivs(user, subscriptionInfoType);
    // Update templates and remove the ones that aren't applicable.
    return cloneObject(teams).reduce((acc, teamTmpl) => {
        // Update template based on privPropValue
        const copyTemplate = applyPrivPropValuesToTemplate(updatedUser, teamTmpl);
        // If the user can create the team....
        if (canUserCreateTeamInProduct(updatedUser, environment, copyTemplate)) {
            // Add the team to the accumulator
            acc.push(copyTemplate);
        }
        return acc;
    }, []);
}

/**
 * Inject the translations into the Group object template
 * @param {object} template Json Template for the Group
 * @param {string} title Group Title
 * @param {object} translation Translation json
 * @private
 */
function _translateTeamTemplate(template, title, translation) {
    // the team template has the i18n keys in a configuration hash
    // we iterate those properties...
    ["titleI18n", "descriptionI18n", "snippetI18n"].forEach(key => {
        // get the actual i18n key from the template itself
        const i18nKey = template.config[key];
        // compute the target property name by removing the I18n
        const targetProp = key.replace("I18n", "");
        // get the translation out of the translation file we fetched
        const val = getProp(translation, `addons.services.teams.groups.${i18nKey}`);
        // interpolate the title name into the translation string
        template[targetProp] = val.replace(/{title}/g, title);
    });
    return template;
}

/**
 * Does a group with the specified title exist in the users org?
 * @param {String} title Group Title
 * @param {IHubRequestOptions} hubRequestOptions
 */
function doesGroupExist(title, hubRequestOptions) {
    const orgId = hubRequestOptions.portalSelf.id;
    const searchOpts = {
        q: `(title:"${title}" accountid:${orgId})`,
        authentication: hubRequestOptions.authentication
    };
    return searchGroups(searchOpts)
        .then(searchResponse => searchResponse.results.length > 0)
        .catch(err => {
        throw Error(`Error in team-utils::doesGroupExist ${err}`);
    });
}

/**
 * Given a title, construct a group title that is unique
 * in the user's org.
 * Given a title of "Medical Team", if a group with that title exists
 * this fn will add a number on the end, and increment until
 * an available group title is found - i.e. "Medical Team 3"
 * @param {String} title Group Title to ensure if unique
 * @param {IHubRequestOptions} hubRequestOptions
 * @param {Number} step Number to increment. Defaults to 0
 */
function getUniqueGroupTitle(title, hubRequestOptions, step = 0) {
    let combinedName = title;
    if (step) {
        combinedName = `${title} ${step}`;
    }
    return doesGroupExist(combinedName, hubRequestOptions)
        .then(result => {
        if (result) {
            step++;
            return getUniqueGroupTitle(title, hubRequestOptions, step);
        }
        else {
            return combinedName;
        }
    })
        .catch(err => {
        throw Error(`Error in team-utils::getUniqueGroupTitle ${err}`);
    });
}

/**
 * Portal Priviledges required to set group access to specific levels
 */
const GROUP_ACCESS_PRIVS = {
    public: ["portal:user:createGroup", "portal:user:shareGroupToPublic"],
    org: ["portal:user:createGroup", "portal:user:shareGroupToOrg"],
    private: ["portal:user:createGroup"]
};

/**
 * Returns the allowed group access based on a user's privileges
 * and org level settings
 * @param requestedAccess public || org || private
 * @param user User object w/ privileges array
 * @param portal optional
 */
function getAllowedGroupAccess(requestedAccess, user, portal) {
    // portal-wide flag takes presidence, and is not sync'd with privs
    const portalWideCanSharePublic = getProp(portal, "canSharePublic") || false;
    // compute what access level the current user can create the group with
    const canCreatePublic = portalWideCanSharePublic &&
        hasAllPrivileges(user, GROUP_ACCESS_PRIVS.public);
    const canCreateOrg = hasAllPrivileges(user, GROUP_ACCESS_PRIVS.org);
    // default to the requested access...
    let result = requestedAccess;
    // if they requested public, but can't make public...
    if (requestedAccess === "public" && !canCreatePublic) {
        // step down to org...
        result = "org";
        // but if they can't do that...
        if (!canCreateOrg) {
            // then do private
            result = "private";
        }
    }
    else {
        // if the requsted access was not public, it's either org or private
        // and if they can't create do org...
        if (requestedAccess === "org" && !canCreateOrg) {
            // must be private
            result = "private";
        }
    }
    return result;
}

/**
 * Create a team group. Will ensure the team name is unique in the users org
 * and return the group, with appropriate `.userMembership` attached.
 * @param {Object} user Current User
 * @param {Object} group Group to create
 * @param {IHubRequestOptions} hubRequestOptions
 * @private
 */
function _createTeamGroup(user, group, hubRequestOptions) {
    group.access = getAllowedGroupAccess(group.access, user, hubRequestOptions.portalSelf);
    return getUniqueGroupTitle(group.title, hubRequestOptions)
        .then(uniqueTitle => {
        group.title = uniqueTitle;
        return createGroup({
            group: group,
            authentication: hubRequestOptions.authentication
        });
    })
        .then(createResponse => {
        group.id = createResponse.group.id;
        return protectGroup({
            id: group.id,
            authentication: hubRequestOptions.authentication
        });
    })
        .then(() => {
        group.userMembership = {
            username: user.username,
            memberType: "owner",
            applications: 0
        };
        return group;
    })
        .catch(ex => {
        throw Error(`Error in team-utils::_createTeamGroup ${ex}`);
    });
}

/**
 * Internal: Actually create the team groups
 * @param {String} title Title for the Team group
 * @param {Array} groupTemplates Array of group definitions to create the groups
 * @param {IHubRequestOptions} hubRequestOptions
 * @private
 */
function _createTeamGroups(title, groupTemplates, translations, hubRequestOptions) {
    // now translate the templates...
    const translatedTemplates = groupTemplates.map(tmpl => {
        return _translateTeamTemplate(tmpl, title, translations);
    });
    // now we actually create the groups... obvs async...
    return Promise.all(translatedTemplates.map(grpTmpl => {
        return _createTeamGroup(hubRequestOptions.portalSelf.user, grpTmpl, hubRequestOptions);
    }))
        .then(groups => {
        // hoist out the id's into a structure that has the groupnameProperty: id
        const props = groups.reduce((acc, grp) => {
            // assign to the property, if one is specified
            if (grp.config.propertyName) {
                acc[grp.config.propertyName] = grp.id;
            }
            return acc;
        }, {});
        // remove config node
        groups.forEach(g => delete g.config);
        // construct the return the hash...
        // props: the props which can be spread into the item.properties hash..
        // groups: the array of groups that were created
        return {
            props,
            groups: groups
        };
    })
        .catch(ex => {
        throw Error(`Error in team-utils::_createTeamGroups ${ex}`);
    });
}

/**
 * Create a single Team, using the same logic as creating multiple Teams.
 * Also allows a set of custom props to be passed in and applied to the team.
 *
 * This should be used PRIOR to creating Sites/Initiatives.
 * @param {ICreateHubTeamOptions} createHubTeamOptions
 */
function createHubTeam(opts) {
    const { title, type, props, hubRequestOptions } = opts;
    // validate that the type is valid...
    if (TEAMTYPES.indexOf(type) === -1) {
        throw new Error(`createHubTeam was passed ${type} which is not a valid type of team. Please send one of: ${TEAMTYPES.join(",")}`);
    }
    // get all the groups the current user can create...
    // filter just the ones that match type...
    const portalSelf = hubRequestOptions.portalSelf;
    const product = getHubProduct(portalSelf);
    const subscriptionType = getSubscriptionType(portalSelf);
    const groupsToCreate = getUserCreatableTeams(portalSelf.user, product, portalSelf.currentVersion, subscriptionType)
        .filter((g) => {
        return g.config.type === type;
    })
        .map((grp) => {
        // If props are passed in, spread them over the group object, but only if type === `team`
        if (grp.config.type === "team") {
            return Object.assign({}, grp, props);
        }
        else {
            return grp;
        }
    });
    // use the locale of the current user, or en-us as a fall-back
    const culture = getCulture(hubRequestOptions);
    const locale = convertToWellKnownLocale(culture);
    // Fire that off
    return fetchHubTranslation(locale, hubRequestOptions.portalSelf)
        .then((translations) => {
        // delegate to createTeamGroups
        return _createTeamGroups(title, groupsToCreate, translations, hubRequestOptions);
    })
        .catch((ex) => {
        throw Error(`Error in team-utils::createHubTeam ${ex}`);
    });
}

/**
 * Create all the groups (aka Teams) required for a Site or Initiative
 * The group names are derived from the Site/Initiative title. Group names
 * must be unique on create, so if necessary we will increment the names
 * after translation. If you need to ADD a Team to an existing Site/Initiative,
 * use the teams-service::addTeams function
 * @param {ICreateHubTeamsOptions} createHubTeamsOptions
 */
function createHubTeams(opts) {
    const { title, types, hubRequestOptions } = opts;
    const product = getHubProduct(hubRequestOptions.portalSelf);
    // get all the groups that this user can create in this environment
    // and filter just the team types requested
    const subscriptionType = getSubscriptionType(hubRequestOptions.portalSelf);
    const teamsToCreate = getUserCreatableTeams(hubRequestOptions.portalSelf.user, product, hubRequestOptions.portalSelf.currentVersion, subscriptionType).filter((g) => {
        return types.indexOf(g.config.type) > -1;
    });
    // get the culture out of the
    const culture = getCulture(hubRequestOptions);
    const locale = convertToWellKnownLocale(culture);
    // Fire that off
    return fetchHubTranslation(locale, hubRequestOptions.portalSelf)
        .then((translations) => {
        // create the team groups
        return _createTeamGroups(title, teamsToCreate, translations, hubRequestOptions);
    })
        .catch((ex) => {
        throw Error(`Error in team-utils::createHubTeams ${ex}`);
    });
}

/**
 * Search for teams
 * @param {ISearchOptions} searchRequestOptions
 * @returns {Promise<ISearchResult>}
 * @private
 */
function _searchTeams(searchRequestOptions) {
    return searchGroups(searchRequestOptions);
}

/**
 * Determine if the current user can create a specific type of team
 * @param {Object} user Current User
 * @param {HubTeamType} hubTeamType
 * @param {*} hubRequestOptions
 */
function canUserCreateTeam(user, hubTeamType, hubRequestOptions) {
    const userGroups = getProp(user, "groups") || [];
    if (userGroups.length > 510) {
        return false;
    }
    else {
        const portalSelf = hubRequestOptions.portalSelf;
        const product = getHubProduct(portalSelf);
        const subscriptionType = getSubscriptionType(portalSelf);
        // get all the groups the user can create in this product...
        return getUserCreatableTeams(user, product, portalSelf.currentVersion, subscriptionType).some((t) => t.config.type === hubTeamType);
    }
}

/**
 * Return a map from the team names to the property names
 * @param {string} product Product Name (basic, premium, enterprise)
 */
function getTeamPropertiesMapForProduct(product) {
    // basic and enterprise, it's just the content group
    const map = {
        content: "contentGroupId",
        core: "collaborationGroupId"
    };
    // premium, we add core and followers
    if (product === "premium") {
        map.followers = "followersGroupId";
    }
    return map;
}

// TODO: at next breaking change remove portalApiVersion param
/**
 * Given a product, return the groups templates that are available
 * @param {string} product Product name portal | basic | premium
 */
function getTeamsAvailableInProduct(product, portalApiVersion // DEPRECATED
) {
    /* tslint:disable no-console */
    console.warn("Hub.js::getTeamsAvailableInProduct Deprecation warning portalApiVersion will be removed at v9.0.0");
    /* tslint:enable no-console */
    const teams = WELLKNOWNTEAMS;
    const filterFn = (tmpl) => {
        return tmpl.config.availableIn.indexOf(product) > -1;
    };
    return cloneObject(teams).filter(filterFn);
}

/**
 * Get the template for a team. This should be used sparingly,
 * usually when you need some of the default properties of the
 * group, but in a context outside of the normal team-service functions.
 * @param {string} team core \ content | followers | team
 * @param {string} product basic | premium | portal
 * @param {string} portalApiVersion portal version
 */
function getTeamTemplate(type, product, portalApiVersion) {
    return getTeamsAvailableInProduct(product, portalApiVersion).find(t => {
        return t.config.type === type;
    });
}

/**
 * Get the types of teams that can be created given the product
 * @param {string} product Product name portal | basic | premium
 */
function getTeamTypesAvailableInProduct(product, portalApiVersion) {
    return getTeamsAvailableInProduct(product, portalApiVersion).map(team => {
        return team.config.type;
    });
}

function getTeamsForProduct(product) {
    const teams = ["content", "core"];
    if (product === "premium") {
        teams.push("followers");
    }
    return teams;
}

/**
 * Enum of the types of teams mapped to their item properties
 */
const TYPEMAP = {
    core: "collaborationGroupId",
    content: "contentGroupId",
    followers: "followersGroupId"
};

/**
 * Get a team by id
 * @param {string} id group id
 * @param {IRequestOptions} hubRequestOptions
 * @returns {Promise<IGroup>}
 */
function getTeamById(id, hubRequestOptions) {
    return getGroup(id, hubRequestOptions);
}

/**
 * Get the users(usernames ONLY) that are members of the Group that backs the Team
 * @param {string} id group id
 * @param {IRequestOptions} hubRequestOptions
 * @returns {Promise<IGroupUsersResult>}
 */
function getTeamMembers(id, hubRequestOptions) {
    return getGroupUsers(id, hubRequestOptions);
}

/**
 * Get the users(actual USER OBJECTS) that are members of the Group that backs the Team
 * @param {string} id group id
 * @param {ISearchGroupUsersOptions} searchOptions
 * @returns {Promise<ISearchGroupUsersResult>}
 */
function searchTeamMembers(id, searchOptions) {
    return searchGroupUsers(id, searchOptions);
}

/**
 * Get the content of a team
 * @param {ISearchGroupContentOptions} searchOptions
 * @returns {Promise<ISearchResult<IItem>>}
 */
function searchTeamContent(searchOptions) {
    return searchGroupContent(searchOptions);
}

/**
 * Checks if user has access to edit a team
 * @param {IGroup} group
 * @param {IUser} user
 * @returns {boolean}
 */
function canEditTeam(group, user) {
    var _a, _b;
    const memberType = (_a = group.userMembership) === null || _a === void 0 ? void 0 : _a.memberType;
    const userName = (_b = group.userMembership) === null || _b === void 0 ? void 0 : _b.username;
    return (userName === user.username &&
        (memberType === "owner" || memberType === "admin"));
}

/**
 * @private
 * Returns an empty instance of the addorinviteresponse object.
 * We are using this because if you leave out any of the props
 * from the final object and you are concatting together arrays you can concat
 * an undeifined inside an array which will throw off array lengths.
 *
 * @export
 * @return {IAddOrInviteResponse}
 */
async function handleNoUsers(context, userType, shouldEmail) {
    return {
        notAdded: [],
        notEmailed: [],
        notInvited: [],
        users: [],
        errors: [],
    };
}

/**
 * @private
 * Auto add N users to a single group, with users added as admins of that group
 *
 * @export
 * @param {string} id Group ID
 * @param {IUser[]} admins array of users to add to group as admin
 * @param {IAuthenticationManager} authentication authentication manager
 * @return {IAddGroupUsersResult} Result of the transaction (null if no users are passed in)
 */
function autoAddUsersAsAdmins(id, admins, authentication) {
    let response = Promise.resolve(null);
    if (admins.length) {
        const args = {
            id,
            admins: admins.map((a) => a.username),
            authentication,
        };
        response = addGroupUsers(args);
    }
    return response;
}

/**
 * @private
 * Governs the logic for emailing N users. It acts under the assumption
 * that all the 'community' users are the ones being emailed (this is due to platform rules we conform to)
 * Function is called upstream depending on if an email object is attached to the context.
 * Email object contains its own auth as it'll require the community admin to send the email itself.
 * An individual email call goes out for each user due to how the response of multiple users in a single call works.
 *
 * @export
 * @param {IAddOrInviteContext} context context object
 * @return {IAddOrInviteResponse} response object
 */
async function processEmailUsers(context) {
    // Fetch users out of context. We only email community users so we are
    // explicit about that
    const users = getProp(context, "community");
    const notEmailed = [];
    let errors = [];
    // iterate through users as we want a distinct email call per user due to how
    // batch email will only respond with success: true/false
    // and if there is an error then it gets priority even though successes do still go through
    for (const user of users) {
        // Make email call...
        const emailResponse = await emailOrgUsers([user], getProp(context, "email.message"), getProp(context, "email.auth"), true);
        // If it's just a failed email
        // then add username to notEmailed array
        if (!emailResponse.success) {
            notEmailed.push(user.username);
            // If there was a legit error
            // Then only the error returns from
            // online. Add error AND include username in notEmailed array.
            if (emailResponse.errors) {
                errors = errors.concat(emailResponse.errors);
            }
        }
    }
    // if you leave out any of the props
    // from the final object and you are concatting together arrays you can concat
    // an undeifined inside an array which will throw off array lengths.
    return {
        users: users.map((u) => u.username),
        notEmailed,
        errors,
        notInvited: [],
        notAdded: [],
    };
}

/**
 * @private
 * Governs logic for automatically adding N users to a group.
 * Users are added as either a regular user OR as an administrator of the group
 * depending on the addUserAsGroupAdmin prop on the IAddOrInviteContext.
 * If there is an email object on the IAddOrInviteContext, then email notifications are sent.
 *
 * @export
 * @param {IAddOrInviteContext} context context object
 * @param {string} userType what type of user is it: org | world | community
 * @param {boolean} [shouldEmail=false] should the user be emailed?
 * @return {IAddOrInviteResponse} response object
 */
async function processAutoAddUsers(context, userType, shouldEmail = false) {
    // fetch users out of context object
    const users = getProp(context, userType);
    let autoAddResponse;
    let emailResponse;
    let notAdded = [];
    let errors = [];
    // fetch addUserAsGroupAdmin out of context
    const { addUserAsGroupAdmin } = context;
    if (addUserAsGroupAdmin) {
        // if is core team we elevate user to admin
        autoAddResponse = await autoAddUsersAsAdmins(getProp(context, "groupId"), users, getProp(context, "primaryRO"));
    }
    else {
        // if not then we are just auto adding them
        autoAddResponse = await autoAddUsers(getProp(context, "groupId"), users, getProp(context, "primaryRO"));
    }
    // handle notAdded users
    if (autoAddResponse.notAdded) {
        notAdded = notAdded.concat(autoAddResponse.notAdded);
    }
    // Merge errors into empty array
    if (autoAddResponse.errors) {
        errors = errors.concat(autoAddResponse.errors);
    }
    // run email process
    if (shouldEmail) {
        emailResponse = await processEmailUsers(context);
        // merge errors in to overall errors array to keep things flat
        if (emailResponse.errors && emailResponse.errors.length > 0) {
            errors = errors.concat(emailResponse.errors);
        }
    }
    // if you leave out any of the props
    // from the final object and you are concatting together arrays you can concat
    // an undeifined inside an array which will throw off array lengths.
    return {
        users: users.map(u => u.username),
        notAdded,
        errors,
        notEmailed: (emailResponse === null || emailResponse === void 0 ? void 0 : emailResponse.notEmailed) || [],
        notInvited: [],
    };
}

/**
 * @private
 * Governs the logic for inviting N users to a single group.
 * An individual invite call goes out for each user and the results are consolidated.
 * See comment in function about the for...of loop which explains reasoning.
 *
 * @export
 * @param {IAddOrInviteContext} context context object
 * @param {string} userType what type of user is it: org | world | community
 * @return {IAddOrInviteResponse} response object
 */
async function processInviteUsers(context, userType) {
    // Fetch users out of context based on userType
    const users = getProp(context, userType);
    const notInvited = [];
    let errors = [];
    const { addUserAsGroupAdmin } = context;
    // iterate through users as we want a distinct invite call per user due to how
    // batch invites will only respond with success: true/false
    // and if there is an error then it gets priority even though successes do still go through
    for (const user of users) {
        // Invite users call
        const inviteResponse = await inviteUsers(getProp(context, "groupId"), [user], getProp(context, "primaryRO"), 20160, // timeout
        addUserAsGroupAdmin ? "group_admin" : "group_member" // if we are in a core team we want to invite them as a group admin, otherwise a group member
        );
        // If it's just a failed invite then
        // add username to notInvited array
        if (!inviteResponse.success) {
            notInvited.push(user.username);
            // If there was a legit error
            // Then only the error returns from
            // online. Add error AND include username in notInvited array.
            if (inviteResponse.errors) {
                errors = errors.concat(inviteResponse.errors);
            }
        }
    }
    // if you leave out any of the props
    // from the final object and you are concatting together arrays you can concat
    // an undeifined inside an array which will throw off array lengths.
    return {
        users: users.map((u) => u.username),
        notInvited,
        errors,
        notEmailed: [],
        notAdded: [],
    };
}

/**
 * @private
 * Handles add/invite logic for community users
 * It returns either an empty instance of the addOrInviteResponse
 * object, or either ther esponse from processing auto adding
 * users or inviting users. If an email has been passed in it also notifies
 * processAutoAddUsers that emails should be sent.
 *
 * @export
 * @param {IAddOrInviteContext} context context object
 * @return {IAddOrInviteResponse} response object
 */
async function addOrInviteCommunityUsers(context) {
    // We default to handleNoUsers
    // we return an empty object because
    // if you leave out any of the props
    // from the final object and you are concatting together arrays you can concat
    // an undeifined inside an array which will throw off array lengths.
    let fnToCall = handleNoUsers;
    let shouldEmail = false;
    // If community users were passed in...
    if (context.community && context.community.length > 0) {
        // Default to either autoAdd or invite based on canAutoAddUser.
        fnToCall = context.canAutoAddUser
            ? processAutoAddUsers
            : processInviteUsers;
        // If we have an email object
        // Then we will auto add...
        // But whether or not we email is still in question
        if (context.email) {
            // If the email object has the groupId property...
            if (context.email.hasOwnProperty("groupId")) {
                // If the email objects groupId property is the same as the current groupId in context...
                // (This function is part of a flow that could work for N groupIds)
                if (context.email.groupId === context.groupId) {
                    // Then we auto add and send email
                    fnToCall = processAutoAddUsers;
                    shouldEmail = true;
                } // ELSE if the groupId's do NOT match, we will fall back
                // To autoAdd or invite as per line 32.
                // We are doing the above logic (lines 43 - 47) because
                // We wish to add users to core teams, followers, and content teams
                // but only to email the core team.
            }
            else {
                // If it does not have a groupId at all then we will autoAdd and email.
                fnToCall = processAutoAddUsers;
                shouldEmail = true;
            }
        }
    }
    // Return/call the function
    return fnToCall(context, "community", shouldEmail);
}

/**
 * @private
 * Handles add/invite logic for Org users
 * It returns either an empty instance of the addOrInviteResponse
 * object, or either ther esponse from processing auto adding a users or inviting a user
 *
 * @export
 * @param {IAddOrInviteContext} context context object
 * @return {IAddOrInviteResponse} response object
 */
async function addOrInviteOrgUsers(context) {
    // If there are no org users return handling no users
    if (!context.org || context.org.length === 0) {
        // we return an empty object because
        // if you leave out any of the props
        // from the final object and you are concatting together arrays you can concat
        // an undeifined inside an array which will throw off array lengths.
        return handleNoUsers();
    }
    // for org user if you have assignUsers then auto add the user
    // if not then invite the user
    return context.canAutoAddUser
        ? processAutoAddUsers(context, "org")
        : processInviteUsers(context, "org");
}

/**
 * @private
 * Handles add/invite logic for world users
 * It either returns an empty instance of the add/invite response
 * object, or a populated version from processInviteUsers
 *
 * @export
 * @param {IAddOrInviteContext} context Context object
 * @return {IAddOrInviteResponse} Response object
 */
async function addOrInviteWorldUsers(context) {
    // If there are no world users return handling no users
    if (!context.world || context.world.length === 0) {
        // we return an empty object because
        // if you leave out any of the props
        // from the final object and you are concatting together arrays you can concat
        // an undeifined inside an array which will throw off array lengths.
        return handleNoUsers();
    }
    // process invite
    return processInviteUsers(context, "world");
}

/**
 * @private
 * Takes users array and sorts them into an object by the type of user they are
 * based on the orgType prop (world|org|community)
 *
 * @export
 * @param {IUserWithOrgType[]} users array of users
 * @return {IUserOrgRelationship} Object of users sorted by type (world, org, community)
 */
function groupUsersByOrgRelationship(users) {
    return users.reduce((acc, user) => {
        // keyof needed to make bracket notation work without TS throwing a wobbly.
        const orgType = user.orgType;
        acc[orgType].push(user);
        return acc;
    }, { world: [], org: [], community: [], partnered: [] });
}

/**
 * Takes array of group ids, if it is a core team, and teams status
 * and returns array of groups
 *
 * @param {array} groupIds Array of group ids
 * @param {boolean} isCoreTeam is this a core team?
 * @param {ITeamsStatus} teamsStatus status of main teams associated with site (core, content, followers)
 */
function teamsToAddUsersTo(groupIds, isCoreTeam, teamsStatus) {
    // If it's a core team && we have the teamsStatus
    if (isCoreTeam && teamsStatus) {
        // Array<keyof etc is needed due to bracket notation to prevent TS from throwing a wobbly
        ["content", "followers"].forEach((teamProp) => {
            if (teamsStatus[teamProp] && teamsStatus[teamProp].isOk) {
                groupIds.push(teamsStatus[teamProp].id);
            }
        });
    }
    return groupIds;
}

/**
 * Given an item, a teamType and a user, return the status
 * of the team ('ok', 'missing', 'broken', 'fixable' ), along
 * with specific details:
 * id: id of the group
 * isMissing: was the group simply never created?
 * isBroken: true if the item has an id for the group, but the group can not be found
 * canFix: true if user can create the group
 * If a team that a route depends on returns `isBroken` the route should redirect
 * to /teams/repair, which will do a full inspection, list things that are broken
 * and then conduct any repairs that can be done. It will list the issues, with
 * the intent of training customers to NOT mess with Team groups in AGO.
 * Once repairs are complete, the user will click a button to return to the route they
 * we attempting to enter before this diversion.
 *
 * @export
 * @param {IItem} item Site or Initiative ITEM (not model)
 * @param {("core" | "content" | "followers")} teamType Type of team to check for
 * @param {IUser} user User Object
 * @param {IHubRequestOptions} ro Auth
 * @return {*}  {Promise<ITeamStatus>}
 */
async function getTeamStatus(item, teamType, user, ro) {
    // Set up Team status result object
    const result = {
        teamType,
        id: null,
        isOk: false,
        isMissing: true,
        isBroken: false,
        canFix: false,
        isMember: false,
    };
    // Get id out of item.properties.[the team type]
    const id = getProp(getProp(item, "properties"), TYPEMAP[teamType]);
    // If there's an id...
    if (id) {
        try {
            // Check to see if the team exists
            const group = await getTeamById(id, ro);
            // if it does..
            if (group) {
                result.id = id;
                result.isOk = true;
                result.isMissing = false;
            }
            else {
                // If it doesn't, then check to see if user can Create team
                result.id = id;
                result.isBroken = true;
                result.canFix = await canUserCreateTeam(user, teamType, ro);
            }
        }
        catch (ex) {
            // If the search errors then check if user can create team
            result.id = id;
            result.isBroken = true;
            result.canFix = await canUserCreateTeam(user, teamType, ro);
        }
    }
    else {
        // If there is not an id then check if the user can create the team
        result.canFix = await canUserCreateTeam(user, teamType, ro);
    }
    return result;
}

/**
 * Add or invite N users to a single team
 * Org|community|world logic flows are run even if there are no users applicable for that particular path.
 * Results from each path are consolidated and surfaced in the return object as failures and errors are of
 * more importance than successes.
 *
 * @export
 * @param {string} groupId Group we are adding users to
 * @param {IUserWithOrgType[]} users array of users to add
 * @param {IAuthenticationManager} primaryRO primary requestOptions
 * @param {boolean} canAutoAddUser Can we automatically add a user to the team?
 * @param {boolean} addUserAsGroupAdmin Should the user be added as a group administrator
 * @param {IAddOrInviteEmail} email Email object
 * @return {IAddOrInviteToTeamResult} Result object
 */
async function addOrInviteUsersToTeam(groupId, users, primaryRO, canAutoAddUser, addUserAsGroupAdmin, email) {
    // Group users by their org relationship
    const parsedUsers = groupUsersByOrgRelationship(users);
    // build up params for the context
    const inputParams = {
        groupId,
        primaryRO,
        allUsers: users,
        canAutoAddUser,
        addUserAsGroupAdmin,
        email,
    };
    // create context from params and parsed users
    const context = Object.assign(inputParams, parsedUsers);
    // result obj by org relationship
    const result = {
        community: await addOrInviteCommunityUsers(context),
        org: await addOrInviteOrgUsers(context),
        world: await addOrInviteWorldUsers(context),
        notAdded: [],
        notInvited: [],
        notEmailed: [],
        errors: [],
        groupId,
    };
    // Bring not added / invited / emailed / errors up to the top level
    result.notAdded = [
        ...result.community.notAdded,
        ...result.org.notAdded,
        ...result.world.notAdded,
    ];
    result.notInvited = [
        ...result.community.notInvited,
        ...result.org.notInvited,
        ...result.world.notInvited,
    ];
    result.notEmailed = [
        ...result.community.notEmailed,
        ...result.org.notEmailed,
        ...result.world.notEmailed,
    ];
    result.errors = [
        ...result.community.errors,
        ...result.org.errors,
        ...result.world.errors,
    ];
    return result;
}

/**
 * addOrInviteUsersToTeams adds/invites N users to N teams
 * Initial entry point function for add/invite members flow
 * when dealing with multiple teams.
 * Responses from each group are then consolidated into the final returned object.
 *
 * @export
 * @param {string[]} groupIds array of groups we are adding users to
 * @param {IUserWithOrgType[]} users array of users to add to those teams
 * @param {IAuthenticationManager} primaryRO primary requestOptions
 * @param {boolean} [canAutoAddUser=false] Can we automatically add a user to the team?
 * @param {boolean} [addUserAsGroupAdmin=false] Can the user be added to a team as an administrator of that team?
 * @param {IAddOrInviteEmail} [email] Email object contains auth for the email && the email object itself
 * @return {*}  {Promise<{
 *   notAdded: string[];
 *   notInvited: string[];
 *   notEmailed: string[];
 *   errors: ArcGISRequestError[];
 *   responses: IAddOrInviteToTeamResult[];
 * }>} Results object
 */
async function addOrInviteUsersToTeams(groupIds, users, primaryRO, canAutoAddUser = false, addUserAsGroupAdmin = false, email) {
    let notAdded = [];
    let notInvited = [];
    let notEmailed = [];
    let errors = [];
    const responses = [];
    // need to for..of loop this as a reduce will overwrite promises during execution
    // this way we get an object of each group id nicely.
    for (const groupId of groupIds) {
        // For each group we'll add the users to them.
        const result = await addOrInviteUsersToTeam(groupId, users, primaryRO, canAutoAddUser, addUserAsGroupAdmin, email);
        // attach each groups results
        responses.push(result);
        // surface results to the top of the stack...
        notAdded = notAdded.concat(result.notAdded);
        errors = errors.concat(result.errors);
        notInvited = notInvited.concat(result.notInvited);
        notEmailed = notEmailed.concat(result.notEmailed);
    }
    // Return built up result object.
    return {
        notAdded,
        notInvited,
        notEmailed,
        errors,
        responses,
    };
}

/**
 * Removes a Team from N hub models.
 * First, if passed deleteTeam, it will delete the team
 * Then it iterates over an array of IModels and removes the given team ID from their teams array
 *
 * @export
 * @param {string} teamId Team ID of the team we are removing
 * @param {IModel[]} models Array of IModels
 * @param {UserSession} authentication Auth
 * @return {*}  {Promise<IUpdateItemResponse[]>}
 */
async function removeTeamFromItems(teamId, models, authentication) {
    // Iterate over all items...
    return Promise.all(models.map((model) => {
        // clone the item before modifying
        const clonedModel = cloneObject(model);
        // remove the id from the item.properties.teams array
        clonedModel.item.properties.teams = without(clonedModel.item.properties.teams, teamId);
        // Check if the user has access to edit the item. itemControl is only present when the item is directly fetched
        // 
        return clonedModel.item.itemControl === "admin" || clonedModel.item.itemControl === "update"
            // If yes, then update the item
            ? updateItem({
                item: clonedModel.item,
                authentication,
            })
            // Otherwise return a 'fail' state for that item specifically
            : { id: clonedModel.item.id, success: false };
    }));
}

/**
 * removeTeam unprotects a group, then deletes it
 *
 * @export
 * @param {string} id Team Id
 * @param {UserSession} authentication authentication
 * @return {*}  {Promise<{groupId: string; success: boolean}>}
 */
async function removeTeam(id, authentication) {
    // unprotect the group
    const unprotectResult = await unprotectGroup({ id, authentication });
    // If that succeeded...
    return unprotectResult.success
        // Remove it.
        ? removeGroup({ id, authentication })
        // Otherwise return a fail state
        : { groupId: id, success: false };
}

/**
 * Remove N users from team. Acts as a wrapper around removeGroupUsers from arcgis-rest-portal
 *
 * @export
 * @param {string} id Group Id
 * @param {string[]} users Array of usernames to remove
 * @param {IAuthenticationManager} authentication auth
 * @return {*}  {Promise<IRemoveGroupUsersResult>}
 */
async function removeUsersFromTeam(id, users, authentication) {
    return removeGroupUsers({
        id,
        users,
        authentication,
    });
}

/**
 * Removes N users from N teams. Calls removeUsersFromTeam on each of the N teams
 *
 * @export
 * @param {string[]} teamIds Array of team ids
 * @param {string[]} usernames Array of usernames to remove
 * @param {IAuthenticationManager} ro Auth
 * @return {*}  {Promise<IRemoveGroupUsersResult[]>}
 */
async function removeUsersFromTeams(teamIds, usernames, ro) {
    return Promise.all(teamIds.map((id) => removeUsersFromTeam(id, usernames, ro)));
}

/**
 * Updates a group. Wrapper around updateGroup from arcgis-rest-portal
 *
 * @export
 * @param {IGroup} group Group object that's being updated
 * @param {IAuthenticationManager} authentication Auth
 * @return {*}  {Promise<{ success: boolean; groupId: string }>}
 */
async function updateTeam(group, authentication) {
    return updateGroup({ group, authentication });
}

/**
 * Updates users membership to admin or member, acts as a wrapper for updateUserMemberships from arcgis-rest-portal
 *
 * @export
 * @param {string} id Group id that the members belong to
 * @param {string[]} users Array of usernames to update membership level on
 * @param {("member" | "admin")} newMemberType The type of user to update the users to
 * @param {UserSession} authentication authentication
 * @return {*}  {Promise<IUpdateGroupUsersResult>}
 */
async function updateUserMembership(id, users, newMemberType, authentication) {
    return updateUserMemberships({
        id,
        users,
        newMemberType,
        authentication,
    });
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

export { _searchTeams as _, createHubTeams as c, getTeamById as g };
