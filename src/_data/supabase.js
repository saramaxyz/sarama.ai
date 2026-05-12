module.exports = {
	url: process.env.SUPABASE_URL || "https://database.sarama.ai",
	publishableKey:
		process.env.SUPABASE_PUBLISHABLE_KEY ||
		"sb_publishable_rBNPqxTAmSjf_coESl1mkg_FDkdCoUw",
	table: "early_access",
};
