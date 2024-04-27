do $$
    declare
    arow record;
    foo varchar(500);
BEGIN
    FOR arow IN SELECT DISTINCT "colApplication Owner (column 32)" AS name FROM public."Applicazioni v2"
    LOOP
        foo = arow.name;
        INSERT INTO public.person(
            id, created_at, updated_at, deleted_at, name,tenant,displayname,email)
        VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, foo, '','','');
    END LOOP;
END;
$$;