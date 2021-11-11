from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .models import Pokemon
from .serializers import PokemonSerializer

# SUAS OUTRAS FUNÇÕES CONTINUAM AQUI

@api_view(['GET', 'POST', 'DELETE'])
def api_pokemon(request, pokemon_id):
    try:
        pokemon = Pokemon.objects.get(id=pokemon_id)
    except Pokemon.DoesNotExist:
        raise Http404()
    serialized_pokemon = PokemonSerializer(pokemon)
    return Response(serialized_pokemon.data)

def api_pokemon_list(request):
    if request.method == 'POST':
        new_pokemon_data = request.data
        pokemon = Pokemon()
        pokemon.name = new_pokemon_data['name']
        pokemon.type = new_pokemon_data['type']
        pokemon.save()
    if request.method == "DELETE":
        pokemon_id  = request.data['id']
        pokemon = Pokemon.objects.get(id = pokemon_id)
        pokemon.delete()
    pokemon = Pokemon.objects.all()
    serialized_pokemon = PokemonSerializer(pokemon, many = True)
    return Response(serialized_pokemon.data)

def api_pokemon(request, pokemon_id):
    try:
        pokemon = Pokemon.objects.get(id=pokemon_id)
    except Pokemon.DoesNotExist:
        raise Http404()
    serialized_pokemon = PokemonSerializer(pokemon)
    return Response(serialized_pokemon.data)