'use strict';

/**
 * Block.js controller
 *
 * @description: A set of functions called "actions" for managing `Block`.
 */

module.exports = {

  /**
   * Retrieve block records.
   *
   * @return {Object|Array}
   */

  aboutall: async (ctx) => {
    return {
      jobs: await strapi.services.job.fetchAll(ctx.query),
      skills: await strapi.services.skill.fetchAll(ctx.query),
      blocks: await strapi.services.block.fetchAll(ctx.query)
    };
  },
};
