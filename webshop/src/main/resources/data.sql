

DELETE FROM role r WHERE r.role = 'ADMIN';
INSERT INTO role (id, role) VALUES (0, 'ADMIN');

DELETE FROM role r WHERE r.role = 'USER';
INSERT INTO role (id, role) VALUES (1, 'USER');


INSERT INTO Item (id, price, name, quantity, image, description, type, created_date, modified_date) VALUES (0, 59, 'Watch 1', 22,'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (1, 79, 'Watch 2', 25,'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (2, 64, 'Watch 3', 127,'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (3, 127, 'Watch 4', 89,'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (4, 199, 'Watch 5', 234,'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (5, 320, 'Watch 6', 8, 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (6, 190, 'Watch 7', 2, 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (7, 111, 'Watch 8', 1, 'https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=855&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (8, 59, 'Watch 9', 34, 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (9, 30, 'Watch 10', 11, 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (10, 599, 'Watch 11', 12, 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (11, 34, 'Watch 12', 22, 'https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (12, 90, 'Watch 13', 32, 'https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (13, 333, 'Watch 14', 19,'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (14, 222, 'Watch 15', 4, 'https://images.unsplash.com/photo-1633869699811-cd4f63049b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (15, 38, 'Watch 16', 7, 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (16, 180, 'Watch 17', 8, 'https://images.unsplash.com/photo-1634141628215-732e10d16bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (17, 98, 'Watch 18', 3, 'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (18, 255, 'Watch 19', 4, 'https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate()),
                                                                                                           (19, 59, 'Watch 20', 2, 'https://images.unsplash.com/photo-1506796684999-9fa2770af9c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate());

INSERT INTO Item (id, price, name, quantity, image, description, type, created_date, modified_date) VALUES (20, 499, 'Diamond ring', 22, 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (21, 239, 'Golden ring', 3, 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (22, 129, 'Ruby ring', 11, 'https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (23, 99, 'Golden wrist chain', 22, 'https://images.unsplash.com/photo-1625908733875-efa9c75c084d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (24, 899, 'Ornate diamond silver ring', 6, 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (25, 269, 'White pearl necklace', 32, 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (26, 499, 'Silver diamond ring', 23, 'https://images.unsplash.com/photo-1607703829739-c05b7beddf60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (27, 89, 'Silver necklace with heart pendant', 18, 'https://images.unsplash.com/photo-1620891239438-eb4b8b467fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (28, 129, 'Gold diamond studded ring', 38, 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (29, 129, 'Silver-colored accessory with clear gemstones', 129, 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (30, 349, 'Gold and silver round pendant', 55, 'https://images.unsplash.com/photo-1625908734088-e21edb6f8f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate()),
                                                                                                           (31, 699, '2 golden rings', 8, 'https://images.unsplash.com/photo-1627293501081-a1f856f447b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'JEWELRY', curdate(), curdate());

INSERT INTO Item (id, price, name, quantity, image, description, type, created_date, modified_date) VALUES (32, 39, 'White zip up jacket', 33, 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'CLOTHES', curdate(), curdate());


INSERT INTO Countries (`id`, `code`, `name`, `symbol`, `currency`) VALUES
(1, 'AF', 'Afghanistan', '؋', 'AFN'),
(2, 'AX', 'Aland Islands', '€', 'EUR'),
(3, 'AL', 'Albania', 'Lek', 'ALL'),
(4, 'DZ', 'Algeria', 'دج', 'DZD'),
(5, 'AS', 'American Samoa', '$', 'USD'),
(6, 'AD', 'Andorra', '€', 'EUR'),
(7, 'AO', 'Angola', 'Kz', 'AOA'),
(8, 'AI', 'Anguilla', '$', 'XCD'),
(9, 'AQ', 'Antarctica', '$', 'AAD'),
(10, 'AG', 'Antigua and Barbuda', '$', 'XCD'),
(11, 'AR', 'Argentina', '$', 'ARS'),
(12, 'AM', 'Armenia', '֏', 'AMD'),
(13, 'AW', 'Aruba', 'ƒ', 'AWG'),
(14, 'AU', 'Australia', '$', 'AUD'),
(15, 'AT', 'Austria', '€', 'EUR'),
(16, 'AZ', 'Azerbaijan', 'm', 'AZN'),
(17, 'BS', 'Bahamas', 'B$', 'BSD'),
(18, 'BH', 'Bahrain', '.د.ب', 'BHD'),
(19, 'BD', 'Bangladesh', '৳', 'BDT'),
(20, 'BB', 'Barbados', 'Bds$', 'BBD'),
(21, 'BY', 'Belarus', 'Br', 'BYN'),
(22, 'BE', 'Belgium', '€', 'EUR'),
(23, 'BZ', 'Belize', '$', 'BZD'),
(24, 'BJ', 'Benin', 'CFA', 'XOF'),
(25, 'BM', 'Bermuda', '$', 'BMD'),
(26, 'BT', 'Bhutan', 'Nu.', 'BTN'),
(27, 'BO', 'Bolivia', 'Bs.', 'BOB'),
(28, 'BQ', 'Bonaire, Sint Eustatius and Saba', '$', 'USD'),
(29, 'BA', 'Bosnia and Herzegovina', 'KM', 'BAM'),
(30, 'BW', 'Botswana', 'P', 'BWP'),
(31, 'BV', 'Bouvet Island', 'kr', 'NOK'),
(32, 'BR', 'Brazil', 'R$', 'BRL'),
(33, 'IO', 'British Indian Ocean Territory', '$', 'USD'),
(34, 'BN', 'Brunei Darussalam', 'B$', 'BND'),
(35, 'BG', 'Bulgaria', 'Лв.', 'BGN'),
(36, 'BF', 'Burkina Faso', 'CFA', 'XOF'),
(37, 'BI', 'Burundi', 'FBu', 'BIF'),
(38, 'KH', 'Cambodia', 'KHR', 'KHR'),
(39, 'CM', 'Cameroon', 'FCFA', 'XAF'),
(40, 'CA', 'Canada', '$', 'CAD'),
(41, 'CV', 'Cape Verde', '$', 'CVE'),
(42, 'KY', 'Cayman Islands', '$', 'KYD'),
(43, 'CF', 'Central African Republic', 'FCFA', 'XAF'),
(44, 'TD', 'Chad', 'FCFA', 'XAF'),
(45, 'CL', 'Chile', '$', 'CLP'),
(46, 'CN', 'China', '¥', 'CNY'),
(47, 'CX', 'Christmas Island', '$', 'AUD'),
(48, 'CC', 'Cocos (Keeling) Islands', '$', 'AUD'),
(49, 'CO', 'Colombia', '$', 'COP'),
(50, 'KM', 'Comoros', 'CF', 'KMF'),
(51, 'CG', 'Congo', 'FC', 'XAF'),
(52, 'CD', 'Congo, Democratic Republic of the Congo', 'FC', 'CDF'),
(53, 'CK', 'Cook Islands', '$', 'NZD'),
(54, 'CR', 'Costa Rica', '₡', 'CRC'),
(55, 'CI', 'Cote D''Ivoire', 'CFA', 'XOF'),
(56, 'HR', 'Croatia', 'kn', 'HRK'),
(57, 'CU', 'Cuba', '$', 'CUP'),
(58, 'CW', 'Curacao', 'ƒ', 'ANG'),
(59, 'CY', 'Cyprus', '€', 'EUR'),
(60, 'CZ', 'Czech Republic', 'Kč', 'CZK'),
(61, 'DK', 'Denmark', 'Kr.', 'DKK'),
(62, 'DJ', 'Djibouti', 'Fdj', 'DJF'),
(63, 'DM', 'Dominica', '$', 'XCD'),
(64, 'DO', 'Dominican Republic', '$', 'DOP'),
(65, 'EC', 'Ecuador', '$', 'USD'),
(66, 'EG', 'Egypt', 'ج.م', 'EGP'),
(67, 'SV', 'El Salvador', '$', 'USD'),
(68, 'GQ', 'Equatorial Guinea', 'FCFA', 'XAF'),
(69, 'ER', 'Eritrea', 'Nfk', 'ERN'),
(70, 'EE', 'Estonia', '€', 'EUR'),
(71, 'ET', 'Ethiopia', 'Nkf', 'ETB'),
(72, 'FK', 'Falkland Islands (Malvinas)', '£', 'FKP'),
(73, 'FO', 'Faroe Islands', 'Kr.', 'DKK'),
(74, 'FJ', 'Fiji', 'FJ$', 'FJD'),
(75, 'FI', 'Finland', '€', 'EUR'),
(76, 'FR', 'France', '€', 'EUR'),
(77, 'GF', 'French Guiana', '€', 'EUR'),
(78, 'PF', 'French Polynesia', '₣', 'XPF'),
(79, 'TF', 'French Southern Territories', '€', 'EUR'),
(80, 'GA', 'Gabon', 'FCFA', 'XAF'),
(81, 'GM', 'Gambia', 'D', 'GMD'),
(82, 'GE', 'Georgia', 'ლ', 'GEL'),
(83, 'DE', 'Germany', '€', 'EUR'),
(84, 'GH', 'Ghana', 'GH₵', 'GHS'),
(85, 'GI', 'Gibraltar', '£', 'GIP'),
(86, 'GR', 'Greece', '€', 'EUR'),
(87, 'GL', 'Greenland', 'Kr.', 'DKK'),
(88, 'GD', 'Grenada', '$', 'XCD'),
(89, 'GP', 'Guadeloupe', '€', 'EUR'),
(90, 'GU', 'Guam', '$', 'USD'),
(91, 'GT', 'Guatemala', 'Q', 'GTQ'),
(92, 'GG', 'Guernsey', '£', 'GBP'),
(93, 'GN', 'Guinea', 'FG', 'GNF'),
(94, 'GW', 'Guinea-Bissau', 'CFA', 'XOF'),
(95, 'GY', 'Guyana', '$', 'GYD'),
(96, 'HT', 'Haiti', 'G', 'HTG'),
(97, 'HM', 'Heard Island and Mcdonald Islands', '$', 'AUD'),
(98, 'VA', 'Holy See (Vatican City State)', '€', 'EUR'),
(99, 'HN', 'Honduras', 'L', 'HNL'),
(100, 'HK', 'Hong Kong', '$', 'HKD'),
(101, 'HU', 'Hungary', 'Ft', 'HUF'),
(102, 'IS', 'Iceland', 'kr', 'ISK'),
(103, 'IN', 'India', '₹', 'INR'),
(104, 'ID', 'Indonesia', 'Rp', 'IDR'),
(105, 'IR', 'Iran, Islamic Republic of', '﷼', 'IRR'),
(106, 'IQ', 'Iraq', 'د.ع', 'IQD'),
(107, 'IE', 'Ireland', '€', 'EUR'),
(108, 'IM', 'Isle of Man', '£', 'GBP'),
(109, 'IL', 'Israel', '₪', 'ILS'),
(110, 'IT', 'Italy', '€', 'EUR'),
(111, 'JM', 'Jamaica', 'J$', 'JMD'),
(112, 'JP', 'Japan', '¥', 'JPY'),
(113, 'JE', 'Jersey', '£', 'GBP'),
(114, 'JO', 'Jordan', 'ا.د', 'JOD'),
(115, 'KZ', 'Kazakhstan', 'лв', 'KZT'),
(116, 'KE', 'Kenya', 'KSh', 'KES'),
(117, 'KI', 'Kiribati', '$', 'AUD'),
(118, 'KP', 'Korea, Democratic People''s Republic of', '₩', 'KPW'),
(119, 'KR', 'Korea, Republic of', '₩', 'KRW'),
(120, 'XK', 'Kosovo', '€', 'EUR'),
(121, 'KW', 'Kuwait', 'ك.د', 'KWD'),
(122, 'KG', 'Kyrgyzstan', 'лв', 'KGS'),
(123, 'LA', 'Lao People''s Democratic Republic', '₭', 'LAK'),
(124, 'LV', 'Latvia', '€', 'EUR'),
(125, 'LB', 'Lebanon', '£', 'LBP'),
(126, 'LS', 'Lesotho', 'L', 'LSL'),
(127, 'LR', 'Liberia', '$', 'LRD'),
(128, 'LY', 'Libyan Arab Jamahiriya', 'د.ل', 'LYD'),
(129, 'LI', 'Liechtenstein', 'CHf', 'CHF'),
(130, 'LT', 'Lithuania', '€', 'EUR'),
(131, 'LU', 'Luxembourg', '€', 'EUR'),
(132, 'MO', 'Macao', '$', 'MOP'),
(133, 'MK', 'Macedonia, the Former Yugoslav Republic of', 'ден', 'MKD'),
(134, 'MG', 'Madagascar', 'Ar', 'MGA'),
(135, 'MW', 'Malawi', 'MK', 'MWK'),
(136, 'MY', 'Malaysia', 'RM', 'MYR'),
(137, 'MV', 'Maldives', 'Rf', 'MVR'),
(138, 'ML', 'Mali', 'CFA', 'XOF'),
(139, 'MT', 'Malta', '€', 'EUR'),
(140, 'MH', 'Marshall Islands', '$', 'USD'),
(141, 'MQ', 'Martinique', '€', 'EUR'),
(142, 'MR', 'Mauritania', 'MRU', 'MRO'),
(143, 'MU', 'Mauritius', '₨', 'MUR'),
(144, 'YT', 'Mayotte', '€', 'EUR'),
(145, 'MX', 'Mexico', '$', 'MXN'),
(146, 'FM', 'Micronesia, Federated States of', '$', 'USD'),
(147, 'MD', 'Moldova, Republic of', 'L', 'MDL'),
(148, 'MC', 'Monaco', '€', 'EUR'),
(149, 'MN', 'Mongolia', '₮', 'MNT'),
(150, 'ME', 'Montenegro', '€', 'EUR'),
(151, 'MS', 'Montserrat', '$', 'XCD'),
(152, 'MA', 'Morocco', 'DH', 'MAD'),
(153, 'MZ', 'Mozambique', 'MT', 'MZN'),
(154, 'MM', 'Myanmar', 'K', 'MMK'),
(155, 'NA', 'Namibia', '$', 'NAD'),
(156, 'NR', 'Nauru', '$', 'AUD'),
(157, 'NP', 'Nepal', '₨', 'NPR'),
(158, 'NL', 'Netherlands', '€', 'EUR'),
(159, 'AN', 'Netherlands Antilles', 'NAf', 'ANG'),
(160, 'NC', 'New Caledonia', '₣', 'XPF'),
(161, 'NZ', 'New Zealand', '$', 'NZD'),
(162, 'NI', 'Nicaragua', 'C$', 'NIO'),
(163, 'NE', 'Niger', 'CFA', 'XOF'),
(164, 'NG', 'Nigeria', '₦', 'NGN'),
(165, 'NU', 'Niue', '$', 'NZD'),
(166, 'NF', 'Norfolk Island', '$', 'AUD'),
(167, 'MP', 'Northern Mariana Islands', '$', 'USD'),
(168, 'NO', 'Norway', 'kr', 'NOK'),
(169, 'OM', 'Oman', '.ع.ر', 'OMR'),
(170, 'PK', 'Pakistan', '₨', 'PKR'),
(171, 'PW', 'Palau', '$', 'USD'),
(172, 'PS', 'Palestinian Territory, Occupied', '₪', 'ILS'),
(173, 'PA', 'Panama', 'B/.', 'PAB'),
(174, 'PG', 'Papua New Guinea', 'K', 'PGK'),
(175, 'PY', 'Paraguay', '₲', 'PYG'),
(176, 'PE', 'Peru', 'S/.', 'PEN'),
(177, 'PH', 'Philippines', '₱', 'PHP'),
(178, 'PN', 'Pitcairn', '$', 'NZD'),
(179, 'PL', 'Poland', 'zł', 'PLN'),
(180, 'PT', 'Portugal', '€', 'EUR'),
(181, 'PR', 'Puerto Rico', '$', 'USD'),
(182, 'QA', 'Qatar', 'ق.ر', 'QAR'),
(183, 'RE', 'Reunion', '€', 'EUR'),
(184, 'RO', 'Romania', 'lei', 'RON'),
(185, 'RU', 'Russian Federation', '₽', 'RUB'),
(186, 'RW', 'Rwanda', 'FRw', 'RWF'),
(187, 'BL', 'Saint Barthelemy', '€', 'EUR'),
(188, 'SH', 'Saint Helena', '£', 'SHP'),
(189, 'KN', 'Saint Kitts and Nevis', '$', 'XCD'),
(190, 'LC', 'Saint Lucia', '$', 'XCD'),
(191, 'MF', 'Saint Martin', '€', 'EUR'),
(192, 'PM', 'Saint Pierre and Miquelon', '€', 'EUR'),
(193, 'VC', 'Saint Vincent and the Grenadines', '$', 'XCD'),
(194, 'WS', 'Samoa', 'SAT', 'WST'),
(195, 'SM', 'San Marino', '€', 'EUR'),
(196, 'ST', 'Sao Tome and Principe', 'Db', 'STD'),
(197, 'SA', 'Saudi Arabia', '﷼', 'SAR'),
(198, 'SN', 'Senegal', 'CFA', 'XOF'),
(199, 'RS', 'Serbia', 'din', 'RSD'),
(200, 'CS', 'Serbia and Montenegro', 'din', 'RSD'),
(201, 'SC', 'Seychelles', 'SRe', 'SCR'),
(202, 'SL', 'Sierra Leone', 'Le', 'SLL'),
(203, 'SG', 'Singapore', '$', 'SGD'),
(204, 'SX', 'Sint Maarten', 'ƒ', 'ANG'),
(205, 'SK', 'Slovakia', '€', 'EUR'),
(206, 'SI', 'Slovenia', '€', 'EUR'),
(207, 'SB', 'Solomon Islands', 'Si$', 'SBD'),
(208, 'SO', 'Somalia', 'Sh.so.', 'SOS'),
(209, 'ZA', 'South Africa', 'R', 'ZAR'),
(210, 'GS', 'South Georgia and the South Sandwich Islands', '£', 'GBP'),
(211, 'SS', 'South Sudan', '£', 'SSP'),
(212, 'ES', 'Spain', '€', 'EUR'),
(213, 'LK', 'Sri Lanka', 'Rs', 'LKR'),
(214, 'SD', 'Sudan', '.س.ج', 'SDG'),
(215, 'SR', 'Suriname', '$', 'SRD'),
(216, 'SJ', 'Svalbard and Jan Mayen', 'kr', 'NOK'),
(217, 'SZ', 'Swaziland', 'E', 'SZL'),
(218, 'SE', 'Sweden', 'kr', 'SEK'),
(219, 'CH', 'Switzerland', 'CHf', 'CHF'),
(220, 'SY', 'Syrian Arab Republic', 'LS', 'SYP'),
(221, 'TW', 'Taiwan, Province of China', '$', 'TWD'),
(222, 'TJ', 'Tajikistan', 'SM', 'TJS'),
(223, 'TZ', 'Tanzania, United Republic of', 'TSh', 'TZS'),
(224, 'TH', 'Thailand', '฿', 'THB'),
(225, 'TL', 'Timor-Leste', '$', 'USD'),
(226, 'TG', 'Togo', 'CFA', 'XOF'),
(227, 'TK', 'Tokelau', '$', 'NZD'),
(228, 'TO', 'Tonga', '$', 'TOP'),
(229, 'TT', 'Trinidad and Tobago', '$', 'TTD'),
(230, 'TN', 'Tunisia', 'ت.د', 'TND'),
(231, 'TR', 'Turkey', '₺', 'TRY'),
(232, 'TM', 'Turkmenistan', 'T', 'TMT'),
(233, 'TC', 'Turks and Caicos Islands', '$', 'USD'),
(234, 'TV', 'Tuvalu', '$', 'AUD'),
(235, 'UG', 'Uganda', 'USh', 'UGX'),
(236, 'UA', 'Ukraine', '₴', 'UAH'),
(237, 'AE', 'United Arab Emirates', 'إ.د', 'AED'),
(238, 'GB', 'United Kingdom', '£', 'GBP'),
(239, 'US', 'United States', '$', 'USD'),
(240, 'UM', 'United States Minor Outlying Islands', '$', 'USD'),
(241, 'UY', 'Uruguay', '$', 'UYU'),
(242, 'UZ', 'Uzbekistan', 'лв', 'UZS'),
(243, 'VU', 'Vanuatu', 'VT', 'VUV'),
(244, 'VE', 'Venezuela', 'Bs', 'VEF'),
(245, 'VN', 'Viet Nam', '₫', 'VND'),
(246, 'VG', 'Virgin Islands, British', '$', 'USD'),
(247, 'VI', 'Virgin Islands, U.s.', '$', 'USD'),
(248, 'WF', 'Wallis and Futuna', '₣', 'XPF'),
(249, 'EH', 'Western Sahara', 'MAD', 'MAD'),
(250, 'YE', 'Yemen', '﷼', 'YER'),
(251, 'ZM', 'Zambia', 'ZK', 'ZMW'),
(252, 'ZW', 'Zimbabwe', '$', 'ZWL');