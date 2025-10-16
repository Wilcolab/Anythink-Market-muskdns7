/**
 * @module routes/api/comments
 * @description Express router exposing API endpoints for managing Comment documents stored via Mongoose.
 * It depends on a Mongoose model named "Comment" and exports a router with endpoints to list and delete comments.
 */

/**
 * GET /api/comments
 *
 * Retrieve all comments.
 *
 * Behavior:
 * - On success: responds with 200 and a JSON array of comment objects.
 * - On failure: responds with 500 and a JSON error object { error: string }.
 *
 * @async
 * @function getComments
 * @param {import("express").Request} req - Express request object.
 * @param {import("express").Response} res - Express response object.
 * @returns {Promise<void>} Sends the response directly; does not return a value.
 * @example
 * // Success response
 * // res.status(200).json([{ _id: '...', text: '...', ... }, ...])
 *
 * @throws {Error} When database fetch fails; results in a 500 response with an error message.
 */

/**
 * DELETE /api/comments/:id
 *
 * Delete a comment by its ID.
 *
 * Behavior:
 * - If the comment with the provided ID is found and deleted: responds with 200 and JSON { message: "Comment deleted successfully" }.
 * - If no comment with the provided ID exists: responds with 404 and JSON { error: "Comment not found" }.
 * - On error (e.g., invalid ID format or database error): responds with 500 and JSON { error: "Failed to delete comment" }.
 *
 * @async
 * @function deleteComment
 * @param {import("express").Request} req - Express request object. Expects req.params.id to contain the comment's MongoDB ObjectId string.
 * @param {import("express").Response} res - Express response object.
 * @returns {Promise<void>} Sends the response directly; does not return a value.
 * @example
 * // Successful deletion
 * // res.json({ message: "Comment deleted successfully" })
 *
 * @throws {Error} When deletion fails due to a database error or invalid ID; results in a 500 response with an error message.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot,

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

//add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {

    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        return res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        return res.status(500).json({ error: "Failed to delete comment" });
    }
});

