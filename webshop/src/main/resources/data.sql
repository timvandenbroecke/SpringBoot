

DELETE FROM role r WHERE r.role = 'ADMIN';
INSERT INTO role (id, role) VALUES (0, 'ADMIN');

DELETE FROM role r WHERE r.role = 'USER';
INSERT INTO role (id, role) VALUES (1, 'USER');


INSERT INTO Item (id, price, name, quantity, image, description, type, created_date, modified_date) VALUES (0, 59, 'Watch 1', 22,'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.', 'WATCH', curdate(), curdate());
