do $$
    declare
    arow record;
   
BEGIN
    FOR arow IN SELECT "colApplication Name (column 0)" as name,"colUnique Code (column 1)" as key, "colApplication Owner (column 32)" AS owner FROM public."Applicazioni v2"
    LOOP
      
        INSERT INTO public.application(
            id, created_at, updated_at, deleted_at, tenant, name, description, key, displayname, owner_id)
        VALUES (DEFAULT, DEFAULT, DEFAULT, DEFAULT, '',arow.name, '',arow.key,arow.name, (SELECT id FROM public.person WHERE name = arow.owner LIMIT 1));
    END LOOP;
END;
$$;